import express, { Request, Response } from "express";
import { REPLCommand } from "repl";
import { Golfer } from "../models/golfer.model";
import { Round } from "../models/round.model";
import { ResourceLimits } from "worker_threads";

export interface IRoundController {
    getRoundById(req: Request, res: Response): Promise<void>;
    postRound(req: Request, res: Response): Promise<void>;
    updateRound(req:Request, res: Response): Promise<void>;
    deleteRound(req: Request, res: Response): Promise<void>;
}

export interface IRoundService {
    getRoundById(id:number): Promise<Round>;
    postRound(round: Round): Promise<void>;
    updateRound(round: Round): Promise<void>;
    deleteRoundById(id: number): Promise<void>;
}

export interface IRoundRepository {
    getRoundById(id:number): Promise<Round>;
    postRound(round: Round): Promise<void>;
    updateRound(round: Round): Promise<void>;
    deleteRound(id: number): Promise<void>;
}