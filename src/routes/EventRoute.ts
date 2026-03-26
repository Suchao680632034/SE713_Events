import express, {Request, Response} from "express";
import * as service from "../services/eventService";
import type {eventModel as Event} from "../generated/prisma/models/event";

import exp from "constants";

const router = express.Router();

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const event = await service.getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});

router.get("/", async (req, res) => {
    if (req.query.category) {
        if (req.query.pageSize && req.query.pageNo) {
        const pageSize = parseInt(req.query.pageSize as string);
        const pageNo = parseInt(req.query.pageNo as string);
        res.json(await service.getAllEventsWithPagination(pageSize, pageNo));
    } else if (req.query.category) {
        res.json(await service.getAllEvents());
    }
}}
);

router.post("/", async (req, res) => {
    const newEvent: Event = req.body;
    res.json(await service.addEvent(newEvent));
});

export default router;
