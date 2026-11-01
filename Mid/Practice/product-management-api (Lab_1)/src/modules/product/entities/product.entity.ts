
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  category!: string;

  @Column("decimal")
  price!: number;

  @Column({ type: "integer", default: 0 })
  quantity!: number;
}
