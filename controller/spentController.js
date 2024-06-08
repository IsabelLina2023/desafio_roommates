import { addSpentQuery, getSpentQuery, updateSpentQuery, deleteSpentQuery, recalculateSpentQuery } from "../models/spentQueries.js";
import { v4 as uuidv4 } from "uuid";
import { sendEmailFunction } from "../helpers/sendMail.js";

export const addSpent = async (req, res) => {
    try {
        const id = uuidv4().slice(0, 8);
        const { roommate, descripcion, monto } = req.body;
        const newSpent = { id, roommate, descripcion, monto };
        const results = await addSpentQuery(newSpent);
        sendEmail(monto, descripcion, roommate)
        recalculateSpentQuery()
        res.status(201).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const getSpent = async (req, res) => {
    try {
        const results = await getSpentQuery();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const updateSpent = async (req, res) => {
    try {
        const { id } = req.query;
        const { roommate, descripcion, monto } = req.body;
        const newSpent = { id, roommate, descripcion, monto };
        const results = await updateSpentQuery(newSpent);
        recalculateSpentQuery()
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const deleteSpent = async (req, res) => {
    try {
        const { id } = req.query;
        const results = await deleteSpentQuery(id);
        recalculateSpentQuery()
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};
