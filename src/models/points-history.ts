import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { UserAuth } from './user-auth';
  
  @Entity()
  export class PointsHistory {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @ManyToOne(() => UserAuth, user => user.pointsHistory, { onDelete: 'CASCADE' })
    user!: UserAuth;
  
    @Column()
    points!: number; 
  
    @Column()
    reason!: string;
  
    @CreateDateColumn()
    created_at!: Date;
  }
  