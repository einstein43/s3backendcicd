// import { IGolferService } from "../interfaces/golfer.interface";
// import { IGolferRepository } from "../interfaces/golfer.interface";
import { container, inject, injectable } from "tsyringe";
import { Golfer } from "../models/golfer.model";
import GolferRepository from "../repositories/golfer.repository";
// import { IRoundRepository, IRoundService } from "../interfaces/round.interface";
import { Round } from "../models/round.model";
import RoundRepository from "../repositories/round.repository";

container.register("IRoundRepository", {
  useClass: RoundRepository,
});

@injectable()
export class RoundService implements RoundService {
  constructor(
    @inject("IRoundRepository") private roundRepository: RoundRepository
  ) {
    this.getRoundById = this.getRoundById.bind(this);
    this.postRound = this.postRound.bind(this);
    this.updateRound = this.updateRound.bind(this);
    this.deleteRoundById = this.deleteRoundById.bind(this);
  }
  public async getRoundById(id: number): Promise<Round> {
    const round = await this.roundRepository.getRoundById(id);
    return round;
  }
  public async postRound(round: Round): Promise<void> {
    await this.roundRepository.postRound(round);
  }
  public async updateRound(round: Round): Promise<void> {
    await this.roundRepository.updateRound(round);
  }
  public async deleteRoundById(id: number): Promise<void> {
    await this.roundRepository.deleteRound(id);
  }
}
