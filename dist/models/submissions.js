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
exports.Submission = void 0;
const typeorm_1 = require("typeorm");
const user_auth_1 = require("./user-auth");
const challenges_1 = require("./challenges");
let Submission = class Submission {
};
exports.Submission = Submission;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Submission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_auth_1.UserAuth, user => user.submissions, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_auth_1.UserAuth)
], Submission.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => challenges_1.Challenge, challenge => challenge.submissions, { onDelete: 'CASCADE' }),
    __metadata("design:type", challenges_1.Challenge)
], Submission.prototype, "challenge", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Submission.prototype, "proof", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    }),
    __metadata("design:type", String)
], Submission.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Submission.prototype, "submitted_at", void 0);
exports.Submission = Submission = __decorate([
    (0, typeorm_1.Entity)()
], Submission);
