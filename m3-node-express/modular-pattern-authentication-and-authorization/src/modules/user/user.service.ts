import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

const createUser = async (payload: Record<string, unknown>) => {
    const { role, name, email, password, age } = payload;

    const hashedPass = await bcrypt.hash(password as string, 10)

    const result = await pool.query(
        `INSERT INTO users (role, name, email, password, age)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [role, name, email, hashedPass, age]
    );
    return result;
}

const getUser = async () => {
    const result = await pool.query(`SELECT * FROM users`);
    return result;
}

const getSingleUser = async (id: string) => {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    return result;
}

const updateUser = async (payload: Record<string, unknown>, id: string) => {
    const { role, name, email, password, age } = payload;
    const hashedPass = await bcrypt.hash(password as string, 10)
    const result = await pool.query(`
        UPDATE users
        SET role=$1, name=$2, email=$3, password=$4, age=$5 
        WHERE id =$6 RETURNING *`,
        [role, name, email, hashedPass, age, id]);

        return result;
}

const deleteUser = async (id: string) => {
    const result = await pool.query(`DELETE FROM users WHERE id =$1`, [id]);
    return result;
}

export const userService = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
}