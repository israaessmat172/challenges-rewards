import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { UserAuth } from './user-auth';
  import { Challenge } from './challenges';
  
  @Entity()
  export class Submission {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @ManyToOne(() => UserAuth, user => user.submissions, { onDelete: 'CASCADE' })
    user!: UserAuth;
  
    @ManyToOne(() => Challenge, challenge => challenge.submissions, { onDelete: 'CASCADE' })
    challenge!: Challenge;
  
    @Column()
    proof!: string;
  
    @Column({
      type: 'enum',
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    })
    status!: 'pending' | 'approved' | 'rejected';
  
    @CreateDateColumn()
    submitted_at!: Date;
  }
  