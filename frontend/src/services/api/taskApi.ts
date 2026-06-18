import { ENV } from '../../config/env';
import { mockTasks } from '../../mocks/mockData';
import type { Task } from '../../types/types';
import axios from 'axios';

let localMockDatabase = [...mockTasks];

const BACKEND_URL = 'https://dailist-backend.onrender.com/api/tasks';

export const taskApi = {

  getTasks: async (): Promise<Task[]> => {
    if (ENV.USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return localMockDatabase;
    } else {
      const response = await axios.get(BACKEND_URL);
      return response.data;
    }
  },

  createTask: async (newTask: Omit<Task, 'id'>): Promise<Task> => {
    if (ENV.USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const createdTask: Task = {
        ...newTask,
        id: crypto.randomUUID()
      };
      
      localMockDatabase.push(createdTask);
      return createdTask;
    } else {
      const response = await axios.post(BACKEND_URL, newTask);
      return response.data;
    }
  },

  updateTask: async (id: string, updatedFields: Partial<Task>): Promise<Task> => {
    if (ENV.USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      let updatedTask: Task | undefined;
      
      localMockDatabase = localMockDatabase.map((task) => {
        if (task.id === id) {
          updatedTask = { ...task, ...updatedFields };
          return updatedTask;
        }
        return task;
      });

      if (!updatedTask) throw new Error('Task not found');
      return updatedTask;
    } else {
      const response = await axios.put(`${BACKEND_URL}/${id}`, updatedFields);
      return response.data;
    }
  },

  toggleComplete: async (id: string): Promise<void> => {
    if (ENV.USE_MOCK) {
      localMockDatabase = localMockDatabase.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    } else {
      await axios.patch(`${BACKEND_URL}/${id}/toggle-complete`);
      return;
    }
  },

  toggleImportant: async (id: string): Promise<void> => {
    if (ENV.USE_MOCK) {
      localMockDatabase = localMockDatabase.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      );
    } else {
      await axios.patch(`${BACKEND_URL}/${id}/toggle-important`);
      return;
    }
  },

  deleteTask: async (id: string): Promise<void> => {
  if (ENV.USE_MOCK) {
    localMockDatabase = localMockDatabase.filter((task) => task.id !== id);
  } else {
    await axios.delete(`${BACKEND_URL}/${id}`);
    return;
  }
}
};