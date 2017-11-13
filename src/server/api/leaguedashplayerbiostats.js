// Dependencies
import express from 'express';

// Data
import datas from '../../data/leaguedashplayerbiostats.json';

// Express Router
const Router = express.Router();

Router.get('/leaguedashplayerbiostats', (req, res, next) => {
    res.json(datas);
});


export default Router;