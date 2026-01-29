import { Request, Response } from 'express';
import { todoServices } from "./todo.service";

const createTodo = async (req: Request, res: Response) => {

    try {
        const result = await todoServices.createTodo(req.body);
        res.status(201).json({
            message: 'Data Inserted',
            data: result.rows[0]
        })

    } catch (err: any) {
        console.error('Error creating Todo:', err);
        return res.status(500).json({
            success: false,
            message: 'Error creating Todo.',
            error: err.message
        })
    }
}

const getTodo = async (req: Request, res: Response) => {
    try {
        const result = await todoServices.getTodo();
        res.status(200).json({
            success: true,
            data: result.rows
        })

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching Todos.',
            error: err.message
        })
    }
}

const getTodoById = async (req: Request, res: Response) => {
    try {
        const result = await todoServices.getTodoById(req.params.id as string);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'Todo not found.'
            })
        } else {
            res.status(200).json({
                success: true,
                data: result.rows
            })
        }
        // console.log(result.rows);

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching Todos.',
            error: err.message
        })
    }
}

const updateTodo = async (req: Request, res: Response) => {
    const { user_id, phone, address, completed, due_date } = req.body;
    try {
        const result = await todoServices.updateTodo(user_id, phone, address, completed, due_date,
            req.params.id as string)

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'Todo not found.'
            })
        } else {
            res.status(201).json({
                success: true,
                data: result.rows
            })
        }
        // console.log(result.rows);

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error updating Todos.',
            error: err.message
        })
    }
}

const deleteTodo = async (req: Request, res: Response) => {
    try {
        const result = await todoServices.deleteTodo(req.params.id as string)
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: 'Todo not found.'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Todo deleted successfully.',
                data: null
            })
        }

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting Todos.',
            error: err.message
        })
    }
}

export const todoController = {
    createTodo,
    getTodo,
    getTodoById,
    updateTodo,
    deleteTodo
};