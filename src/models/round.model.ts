import { Course } from "./course.model"
import { Golfer } from "./golfer.model"

export interface Round {
    id: number
    course: Course
    golfer: Golfer
    score: number
}