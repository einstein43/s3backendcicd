import "reflect-metadata"
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { GolferController } from "./controllers/golfer.controller";
import { RoundController } from "./controllers/round.controller";
import { REPLCommand } from "repl";

const app = express();
const golferController = container.resolve(GolferController)
const roundController = container.resolve(RoundController)


  
app.get("/golfer/all", async (req: Request, res: Response ) =>  {
  return await golferController.getAllGolfers(req, res);
});

app.get("/golfer/new", async  (req: Request, res: Response) => {
 return await golferController.createGolfer(req, res);
});

app.get("/golfer/one", async (req: Request, res: Response) => {
 return await golferController.getGolferById(req, res);
});

app.get("/golfer/update", async (req: Request, res: Response) => {
 return await golferController.updateGolferById(req, res);
});

app.get("/round/id", async (req: Request, res: Response) => {
  return await roundController.getRoundById(req,res);
});

app.get("/round/post", async (req: Request, res: Response) => {
  return await roundController.postRound(req, res);
})

app.get("/round/update", async (req: Request, res: Response) => {
  return await roundController.updateRound(req, res);
})
app.get("/round/delete", async (req: Request, res: Response) => {
  return await roundController.deleteRound(req, res);
})





app.listen(3001, () => console.log("app listening on port 3001"));

