"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
const typeorm_1 = require("typeorm");
const user_auth_1 = require("./user-auth");
const submissions_1 = require("./submissions");
let Challenge = class Challenge {
};
exports.Challenge = Challenge;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Challenge.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Challenge.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Challenge.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Challenge.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Challenge.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Challenge.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Challenge.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_auth_1.UserAuth, user => user.challenges, { onDelete: 'SET NULL' }),
    __metadata("design:type", user_auth_1.UserAuth)
], Challenge.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => submissions_1.Submission, submission => submission.challenge),
    __metadata("design:type", Array)
], Challenge.prototype, "submissions", void 0);
exports.Challenge = Challenge = __decorate([
    (0, typeorm_1.Entity)()
], Challenge);
