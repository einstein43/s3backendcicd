import express, { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
import { IGolferController } from "../interfaces/golfer.interface";
import { Golfer } from "../models/golfer.model";
import { GolferService } from "../services/golfer.service";

container.register("IGolferService", {
  useClass: GolferService,
});

@injectable()
export class GolferController {
  constructor(@inject("IGolferService") private golferService: GolferService) {
    this.getAllGolfers = this.getAllGolfers.bind(this);
    this.getGolferById = this.getGolferById.bind(this);
    this.updateGolferById = this.updateGolferById.bind(this);
    this.deleteGolferById = this.deleteGolferById.bind(this);
    this.createGolfer = this.createGolfer.bind(this);
  }

  public async getAllGolfers(req: Request, res: Response): Promise<void> {
    const golfers = await this.golferService.getAllGolfers();

    res.status(200).send(golfers);

   }

  public async createGolfer(req: Request, res: Response): Promise<void> {
    const golfer = req.body.golfer;

    await this.golferService.createGolfer(golfer);
  }

  public async getGolferById(req: Request, res: Response): Promise<void> {
    const id = req.body.id;

    return await this.golferService.getGolferById(id);
  }

  public async updateGolferById(req: Request, res: Response): Promise<void> {
    const id = req.body.id;
    const golfer = req.body.golfer;
    await this.golferService.updateGolferById(id, golfer);
  }

  public async deleteGolferById(req: Request, res: Response): Promise<void> {
    const id = req.body.id;

    await this.golferService.deleteGolferById(id);
  }
}
