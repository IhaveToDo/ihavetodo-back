import { TaskEntity } from '@todo/entity/task.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from '@user/entity/user.entity';

@Entity('todo')
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', nullable: false }) title: string;
  @Column({ type: 'varchar', nullable: true }) type: string;
  @CreateDateColumn() createdOn?: Date;
  @CreateDateColumn() updatedOn?: Date;

  @ManyToOne((type) => UserEntity)
  owner?: UserEntity;

  @OneToMany((type) => TaskEntity, (task) => task.todo)
  tasks?: TaskEntity[];
}
