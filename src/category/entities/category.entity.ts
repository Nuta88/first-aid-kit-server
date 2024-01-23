import {
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  Entity
} from "typeorm";
import { Medicine } from "../../medicine/entities/medicine.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @ManyToMany(() => Medicine, (medicine) => medicine.categories)
  medicines: Medicine[]
}
