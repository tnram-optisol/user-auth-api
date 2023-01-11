import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'string' })
  email: string;

  @Column({ type: 'string' })
  password: string;

  @Column({ type: 'string', nullable: true })
  profilePic: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
