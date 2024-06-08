import express from 'express';
import { addSpent, getSpent, updateSpent, deleteSpent } from '../controller/spentController.js';
const router = express.Router();

router.post('/gasto', addSpent);

router.get('/gastos', getSpent);

router.put('/gasto', updateSpent);

router.delete('/gasto', deleteSpent);

router.get('*', (req, res)=>{
res.send('404 - page not found')
})

export default router;
