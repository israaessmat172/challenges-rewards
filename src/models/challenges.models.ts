import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { UserAuth } from "./user-auth.models";
import { Submission } from "./submissions.models";

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column("text")
  description!: string;

  @Column()
  points!: number;

  @Column()
  type!: string;

  @Column({ type: "timestamp" })
  deadline!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => UserAuth, (user) => user.challenges, {
    onDelete: "SET NULL",
  })
  created_by!: UserAuth;

  @OneToMany(() => Submission, (submission) => submission.challenge)
  submissions!: Submission[];
}
