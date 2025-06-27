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
exports.UserAuth = void 0;
const typeorm_1 = require("typeorm");
const challenges_1 = require("./challenges");
const submissions_1 = require("./submissions");
const points_history_1 = require("./points-history");
let UserAuth = class UserAuth {
};
exports.UserAuth = UserAuth;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserAuth.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAuth.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserAuth.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAuth.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['user', 'admin'],
        default: 'user',
    }),
    __metadata("design:type", String)
], UserAuth.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserAuth.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => challenges_1.Challenge, challenge => challenge.created_by),
    __metadata("design:type", Array)
], UserAuth.prototype, "challenges", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => submissions_1.Submission, submission => submission.user),
    __metadata("design:type", Array)
], UserAuth.prototype, "submissions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => points_history_1.PointsHistory, pointsHistory => pointsHistory.user),
    __metadata("design:type", Array)
], UserAuth.prototype, "pointsHistory", void 0);
exports.UserAuth = UserAuth = __decorate([
    (0, typeorm_1.Entity)()
], UserAuth);
