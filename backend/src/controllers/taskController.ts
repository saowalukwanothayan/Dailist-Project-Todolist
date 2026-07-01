import { Request, Response } from 'express';
import pool from '../config/db.js';

export const getTasks = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT 
        task_id AS id, 
        title, 
        TO_CHAR(task_date, 'YYYY-MM-DD') AS date, 
        start_time AS "startTime", 
        end_time AS "endTime", 
        location, 
        description, 
        is_important AS important, 
        is_completed AS completed
      FROM tasks
    `);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, date, startTime, endTime, location, description, important, completed } = req.body;

  try {
    const result = await pool.query(`
      INSERT INTO tasks (title, task_date, start_time, end_time, location, description, is_important, is_completed)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING 
        task_id AS id, 
        title, 
        TO_CHAR(task_date, 'YYYY-MM-DD') AS date, 
        start_time AS "startTime", 
        end_time AS "endTime", 
        location, 
        description, 
        is_important AS important, 
        is_completed AS completed
    `, [title, date, startTime, endTime, location, description, important || false, completed || false]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, date, startTime, endTime, location, description } = req.body;

  try {
    const result = await pool.query(`
      UPDATE tasks 
      SET 
        title = COALESCE($1, title),
        task_date = COALESCE($2, task_date),
        start_time = COALESCE($3, start_time),
        end_time = COALESCE($4, end_time),
        location = COALESCE($5, location),
        description = COALESCE($6, description)
      WHERE task_id = $7
      RETURNING 
        task_id AS id,
        title,
        TO_CHAR(task_date, 'YYYY-MM-DD') AS date, 
        start_time AS "startTime",
        end_time AS "endTime", 
        location, description,
        is_important AS important,
        is_completed AS completed
    `, [title, date, startTime, endTime, location, description, id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const toggleComplete = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`
      UPDATE tasks 
      SET is_completed = NOT is_completed 
      WHERE task_id = $1
      RETURNING is_completed AS completed
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error toggling complete:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const toggleImportant = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`
      UPDATE tasks 
      SET is_important = NOT is_important 
      WHERE task_id = $1
      RETURNING is_important AS important
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error toggling important:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM tasks WHERE task_id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};