import { pool } from "../../config/db";


// Record<string, unknown> => {key(string): value(unknown)}
const createTodo = async (payload: Record<string, unknown>) => {
    const { user_id, phone, address, completed, due_date } = payload;
    const result = await pool.query(
        `INSERT INTO todos (user_id, phone, address, completed, due_date) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [user_id, phone, address, completed, due_date]
    );
    return result;
}

const getTodo = async () => {
    const result = await pool.query(`SELECT * FROM todos`);
    return result;
}

const getTodoById = async (id: string) => {
    const result = await pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);
    return result;
}

const updateTodo = async (user_id: number, phone: string, address: string, completed: string, due_date: string, id: string) => {
    const result = await pool.query(`
            UPDATE todos 
            SET user_id=$1, phone=$2, address=$3,
            completed=$4, due_date=$5
            WHERE id=$6 RETURNING *`,
        [user_id, phone, address, completed, due_date, id]);
    return result;
}

const deleteTodo = async (id: string) => {
    const result = await pool.query(`DELETE FROM todos WHERE id = $1`,
        [id]);
    return result;
}

export const todoServices = {
    createTodo,
    getTodo,
    getTodoById,
    updateTodo,
    deleteTodo
}