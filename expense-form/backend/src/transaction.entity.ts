import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'date' })
  date?: Date;

  @Column({ type: 'decimal' })
  sum?: number;

  @Column({ length: 50 })
  category?: string;

  @Column({ type: 'text', nullable: true })
  comment?: string;
}


