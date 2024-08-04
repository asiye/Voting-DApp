const express = require('express');
const Web3 = require('web3');
const contract = require('@truffle/contract');
const VotingArtifact = require('./build/contracts/Voting.json');

const app = express();
const port = 3000;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const Voting = contract(VotingArtifact);
Voting.setProvider(web3.currentProvider);

let votingInstance;

app.get('/vote/:candidate', async (req, res) => {
  try {
    const candidate = web3.utils.asciiToHex(req.params.candidate);
    const accounts = await web3.eth.getAccounts();
    await votingInstance.voteForCandidate(candidate, { from: accounts[0] });
    res.send(`Voted for ${req.params.candidate}`);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.get('/votes/:candidate', async (req, res) => {
  try {
    const candidate = web3.utils.asciiToHex(req.params.candidate);
    const votes = await votingInstance.totalVotesFor(candidate);
    res.send(`Votes for ${req.params.candidate}: ${votes}`);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

Voting.deployed().then(instance => {
  votingInstance = instance;
  app.listen(port, () => {
    console.log(`Voting DApp listening at http://localhost:${port}`);
  });
});
