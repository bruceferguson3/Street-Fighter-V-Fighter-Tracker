const express = require('express');
let app = express();
const port = 3030;
const axios = require('axios');
const cors = require('cors');

app.use(cors());
//app.use(express.static(''));
app.use(express.json());

app.post('/topStatsSFV', (req, res) => {
    axios.get(`http://rank.shoryuken.com/api/top?game=SF5&format=json`)
        .then((topPlayerList) => {
            //console.log("GOT THE LIST");
            //console.log(JSON.stringify(topPlayerList.data, null, 2));
            let PlayerInfo = [];

            topPlayerList.data.map((player) => {
                PlayerInfo.push({name: player.name, rank: player.rank});
            });

            //console.log(PlayerInfo);
            res.send(PlayerInfo)
        })
        .catch(() => {
            //console.log("LIST NOT FOUND");
            res.sendStatus(404);
        })
});

app.post('/playerStats', (req, res) => {
    console.log(req.body.name);
    axios.get(`http://rank.shoryuken.com/api/player/name/${req.body.name}`)
        .then((PlayerData) => {
            console.log("GOT THE DATA");
            let PlayerInfo = [];
            PlayerInfo.push({name: PlayerData.data.name, country: PlayerData.data.country,
                onlineId: PlayerData.data.onlineId, cptRank: PlayerData.data.cptRank,
                cptScore: PlayerData.data.cptScore});
            //console.log(PlayerData.data);
            console.log(PlayerInfo);
            res.send(PlayerInfo)
        })
        .catch((err) => {
            console.log('YOU FAILED');
            res.send(err)})
});



app.listen(port, () => {console.log(`Listening on port ${port}...`)});