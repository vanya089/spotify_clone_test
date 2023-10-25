import {Column, DataType, Model, Table} from 'sequelize-typescript';
@Table
export class MusicTrack extends Model {
    @Column({
        type: DataType.STRING,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
    })
    author!: string;

    @Column({
        type: DataType.STRING,
    })
    albumName!: string;

    @Column({
        type: DataType.INTEGER,
    })
    releaseYear!: number;

    @Column({
        type: DataType.STRING,
    })
    genre!: string;

    @Column({
        type: DataType.STRING,
    })
    fileUrl!: string;
}
