import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"users"})
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    fullname!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    age!: number;

    @Column()
    phone!: string;

    @Column()
    account_type!: string;

    @Column()
    address?: string;

}