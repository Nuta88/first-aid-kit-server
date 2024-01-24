import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  Check
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
@Check(`"priority" = ANY(ARRAY['name', 'category']::varchar[])`)
export class ConstantlyStoredMedicine {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  priority: 'name' | 'category';
  @Column({ type: 'varchar', length: 300, nullable: true })
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
