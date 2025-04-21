
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    username: string;

    @Column({ length: 100 })
    email: string;

    @Column({ name: 'password_hash', length: 255 })
    passwordHash: string;

    @Column()
    accessLevel: number;

    @Column()
    accountStatus: number;
}
