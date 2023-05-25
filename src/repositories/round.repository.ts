// import { IRoundRepository } from "../interfaces/round.interface";
import { Golfer } from "../models/golfer.model";
import { Round } from "../models/round.model";

export default class RoundRepository implements RoundRepository {
  constructor() {}

  public async getRoundById(id: number): Promise<Round> {
    throw new Error("Method not implemented.");
  }
  public async postRound(round: Round): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async updateRound(round: Round): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async deleteRound(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
