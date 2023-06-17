import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import { GiftModel } from "../4-models/gift-model";


const router = express.Router(); // Capital R

// GET http://localhost:3001/api/audience
router.get("/audience", async (request: Request, response: Response, next: NextFunction) => {
    try {
const audience = await logic.getAllAudience()
response.json(audience)
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/gifts/:audienceId
router.get("/gifts/:audienceId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const audienceId = request.params.audienceId
const gifts = await logic.getGiftsByAudience(audienceId)
response.json(gifts)
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/gifts
router.post("/gifts", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const newGift = new GiftModel(request.body)
const addGift = await logic.addGift(newGift)
response.status(201).json(addGift)
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:3001/api/gifts
router.delete("/gifts/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id
await logic.deleteGift(_id)
response.sendStatus(204)
    }
    catch (err: any) {
        next(err);
    }
});
export default router;
