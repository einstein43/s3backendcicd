// import { IGolferRepository } from "../interfaces/golfer.interface";
 import { Golfer } from "../models/golfer.model";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class GolferRepository {
  constructor() {}

  public async getAllGolfers(): Promise<any> {
    try {
      const golfers = await prisma.golfers.findMany();
      console.log("golfers retrieved");
  
      const golfersWithNonNullValues = golfers.map((golfer) => ({
        ...golfer,
        fName: golfer.fName ?? "404", // Provide a default value for null fName
      }));
  
      return golfersWithNonNullValues;
    } catch (error) {
      console.error("could not find golfers in repository");
      throw new Error("Failed to retrieve golfers");
    }
  }
  
  

  public async createGolfer(golfer: Golfer): Promise<void> {
    try {
      const newGolfer = await prisma.golfers.create({
        data: {
          fName: golfer.fName,
          lName: golfer.lName,
          email: golfer.email,
          handicap: golfer.handicap,
        },
      });
      console.log(newGolfer);
    } catch (error) {
      console.error("could not create golfer in repository");
      throw new Error("Failed to create golfer");
    }
    console.log("golfer created");
  }

  public async getGolferById(id: number): Promise<void> {
    try {
      const golfer = await prisma.golfers.findUnique({
        where: {
          id: id,
        },
      });
      console.log(golfer);
    } catch (error) {
      console.error("could not find golfer in repository");
      throw new Error("Failed to retrieve golfer");
    }
    console.log("golfer retrieved");
  }

  public async updateGolferById(id: number, golfer: Golfer): Promise<void> {
    try {
      const updatedGolfer = await prisma.golfers.update({
        where: {
          id: id,
        },
        data: {
          fName: golfer.fName,
          lName: golfer.lName,
          email: golfer.email,
          handicap: golfer.handicap,
        },
      });
      console.log(updatedGolfer);
    } catch (error) {
      console.error("could not update golfer in repository");
      throw new Error("Failed to update golfer");
    }
    console.log("golfer updated");
  }

  public async deleteGolferById(id: number): Promise<void> {
    try {
      const deletedGolfer = await prisma.golfers.delete({
        where: {
          id: id,
        },
      });
      console.log(deletedGolfer);
    } catch (error) {
      console.error("could not delete golfer in repository");
      throw new Error("Failed to delete golfer");
    }
    console.log("golfer deleted");
  }
}
