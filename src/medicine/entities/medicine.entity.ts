import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;
  @Column({ length: 50, nullable: false })
  name: string;
  @Column({ nullable: false })
  amount: number;
  @Column({ type: 'date', nullable: false })
  expiration_date: string;
  @Column()
  description?: string | null;
  
  @ManyToMany(() => Category, (category) => category.medicines, {
    eager: true
  })
  @JoinTable({
    name: 'medicine_category',
    joinColumn: {
      name: 'medicine_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    }
  })
  categories: Category[]
}
