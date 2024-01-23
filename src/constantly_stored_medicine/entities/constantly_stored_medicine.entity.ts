import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class ConstantlyStoredMedicine {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50, nullable: false })
  name: string;
  @Column()
  priority: string;
  @Column()
  description?: string | null;
  
  @ManyToMany(() => Category, (category) => category.medicines, {
    eager: true,
  })
  @JoinTable({
    name: 'constantly_stored_medicine_category',
    joinColumn: {
      name: 'constantly_stored_medicine_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    }
  })
  categories: Category[]
}
