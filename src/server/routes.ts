import { render } from '@testing-library/react';
import * as express from 'express';
const cheeses = require('./data/cheeses.json');
const purchase = require('./data/purchase.json');


const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});
router.get('/api/purchase', (req, res, next) => {

    res.json(purchase);
});
export default router;