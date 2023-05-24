import express, { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
import { IRoundController } from "../interfaces/round.interface";
import { Golfer } from "../models/golfer.model";
import { Round } from "../models/round.model";
import { GolferService } from "../services/golfer.service";
import { RoundService } from "../services/round.service";

container.register("IRoundService", {
  useClass: RoundService,
});

@injectable()
export class RoundController implements IRoundController {
  constructor(@inject("IRoundService") private roundService: RoundService) {
    this.getRoundById = this.getRoundById.bind(this);
    this.postRound = this.postRound.bind(this);
    this.updateRound = this.updateRound.bind(this);
    this.deleteRound = this.deleteRound.bind(this);
  }
  public async getRoundById(req: Request, res: Response): Promise<void> {
    const id = req.body.id;
    const round: Round = await this.roundService.getRoundById(id);
    res.status(200).send(round);
  }
  public async postRound(req: Request, res: Response): Promise<void> {
    const round = req.body.round;
    await this.roundService.postRound(round);
    res.status(200).send();
  }
  public async updateRound(req: Request, res: Response): Promise<void> {
    const round = req.body.round;
    await this.roundService.updateRound(round);
    res.status(200).send();
  }
  public async deleteRound(req: Request, res: Response): Promise<void> {
    const id = req.body.id;
    await this.roundService.deleteRoundById(id);
    res.status(200).send();
  }
}
