import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

const createUser = async (payload: Record<string, unknown>) => {
    const { name, email, password, age } = payload;

    const hashedPass = await bcrypt.hash(password as string, 10)

    const result = await pool.query(
        `INSERT INTO users (name, email, password, age) 
            VALUES ($1, $2, $3, $4) RETURNING *`,
        [name, email, hashedPass, age]
    );
    return result;
}

const getUser = async () => {
    const result = await pool.query(`SELECT * FROM users`);
    return result;
}

const getUserById = async (id: string) => {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    return result;
}

const updateUser = async (payload: Record<string, unknown>, id: string) => {
    const { name, email, hashedPass, age } = payload;
    const result = await pool.query(`
            UPDATE users 
            SET name=$1, email=$2, password=$3 age=$4 
            WHERE id=$5 RETURNING *`,
        [name, email, hashedPass, age, id]);
    return result;
}

const deleteUser = async (id: string) => {
    const result = await pool.query(`DELETE FROM users WHERE id = $1`,
        [id]);
    return result;
}

export const userServices = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}