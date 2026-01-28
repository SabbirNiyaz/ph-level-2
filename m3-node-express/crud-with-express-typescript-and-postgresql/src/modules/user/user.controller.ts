import { Request, Response } from 'express';
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    // console.log(req.body);
    const { name, email, age } = req.body;

    try {
        const result = await userServices.createUser(name, email, age);
        // console.log(result.rows[0]);

        res.status(201).json({
            message: 'Data Inserted',
            data: result.rows[0]
        })

    } catch (err: any) {
        console.error('Error creating user:', err);
        return res.status(500).json({
            success: false,
            message: 'Error creating user.',
            error: err.message
        })
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getUser();
        res.status(200).json({
            success: true,
            data: result.rows
        })

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching users.',
            error: err.message
        })
    }
}

const getUserById = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getUserById(req.params.id as string);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'User not found.'
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
            message: 'Error fetching users.',
            error: err.message
        })
    }
}

const updateUser = async (req: Request, res: Response) => {
    const { name, email, age } = req.body;
    try {
        const result = await userServices.updateUser(name, email, age,
            req.params.id as string)

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'User not found.'
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
            message: 'Error updating users.',
            error: err.message
        })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.deleteUser(req.params.id as string)
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: 'User not found.'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'User deleted successfully.',
                data: null
            })
        }

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting users.',
            error: err.message
        })
    }
}

export const userController = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
};