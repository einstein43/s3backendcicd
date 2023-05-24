"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var GolferRepository = /** @class */ (function () {
    function GolferRepository() {
    }
    GolferRepository.prototype.getAllGolfers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma.golfers.findMany()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("could not find golfers in repository");
                        throw new Error("Failed to retrieve golfers");
                    case 3:
                        console.log("golfers retrieved");
                        return [2 /*return*/];
                }
            });
        });
    };
    GolferRepository.prototype.createGolfer = function (golfer) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    GolferRepository.prototype.getGolferById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var golfer, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma.golfers.findUnique({
                                where: {
                                    id: id,
                                },
                            })];
                    case 1:
                        golfer = _a.sent();
                        console.log(golfer);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error("could not find golfer in repository");
                        throw new Error("Failed to retrieve golfer");
                    case 3:
                        console.log("golfer retrieved");
                        return [2 /*return*/];
                }
            });
        });
    };
    GolferRepository.prototype.updateGolferById = function (id, golfer) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedGolfer, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma.golfers.update({
                                where: {
                                    id: id,
                                },
                                data: {
                                    fName: golfer.fName,
                                    lName: golfer.lName,
                                    email: golfer.email,
                                    handicap: golfer.handicap,
                                },
                            })];
                    case 1:
                        updatedGolfer = _a.sent();
                        console.log(updatedGolfer);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.error("could not update golfer in repository");
                        throw new Error("Failed to update golfer");
                    case 3:
                        console.log("golfer updated");
                        return [2 /*return*/];
                }
            });
        });
    };
    GolferRepository.prototype.deleteGolferById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedGolfer, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma.golfers.delete({
                                where: {
                                    id: id,
                                },
                            })];
                    case 1:
                        deletedGolfer = _a.sent();
                        console.log(deletedGolfer);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.error("could not delete golfer in repository");
                        throw new Error("Failed to delete golfer");
                    case 3:
                        console.log("golfer deleted");
                        return [2 /*return*/];
                }
            });
        });
    };
    return GolferRepository;
}());
exports.default = GolferRepository;
