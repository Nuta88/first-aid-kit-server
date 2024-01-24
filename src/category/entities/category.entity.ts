import {
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  Entity,
  Unique
} from 'typeorm';
import { Medicine } from '../../medicine/entities/medicine.entity';

@Entity()
@Unique(['name'])
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50, nullable: false, unique: true })
  name: string;
  @ManyToMany(() => Medicine, (medicine) => medicine.categories)
  medicines: Medicine[]
}
