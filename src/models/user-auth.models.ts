import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Challenge } from "./challenges.models";
import { Submission } from "./submissions.models";
import { PointsHistory } from "./points-history.models";

@Entity()
export class UserAuth {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({
    type: "enum",
    enum: ["user", "admin"],
    default: "user",
  })
  role!: "user" | "admin";

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(() => Challenge, (challenge) => challenge.created_by)
  challenges!: Challenge[];

  @OneToMany(() => Submission, (submission) => submission.user)
  submissions!: Submission[];

  @OneToMany(() => PointsHistory, (pointsHistory) => pointsHistory.user)
  pointsHistory!: PointsHistory[];
}
