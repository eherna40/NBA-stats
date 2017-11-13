// Dependencies
import express from 'express';

// Data
import datas from '../../data/commonplayerinfo.json';

// Express Router
const Router = express.Router();

Router.get('/commonplayerinfo', (req, res, next) => {
    const {
        query: {
            PlayerID = 0
        }
    } = req
    const selectedPlayer = datas.resultSets.filter(data => data.rowSet[0][0] === Number(PlayerID))
    console.log(PlayerID)
   
    res.json(selectedPlayer);
});


export default Router;