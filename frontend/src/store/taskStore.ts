import { create } from 'zustand'
import { taskApi } from '../services/api/taskApi'
import type { Task } from '../types/types'

type TaskStore = {
  tasks: Task[];
  isLoading: boolean;
  errorMessage: string | null;
  clearError: () => void; 
  
  selectedTask: Task | null;
  isDetailOpen: boolean;

  openDetail: (task: Task) => void;
  closeDetail: () => void;
  
  fetchTasks: () => Promise<void>    
  addTask: (newTask: Omit<Task, 'id'>) => Promise<void>
  updateTask: (id: string, updatedFields: Partial<Task>) => Promise<void>
  deleteTask: (id: string) => Promise<void>
  toggleComplete: (id: string) => Promise<void> 
  toggleImportant: (id: string) => Promise<void>
}

const sortTasks = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => {
  
    if (a.date !== b.date) {
      return a.date.localeCompare(b.date);
    }
    return a.startTime.localeCompare(b.startTime);
  });
};

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  isLoading: false,
  errorMessage: null,
  clearError: () => set({ errorMessage: null }),

  selectedTask: null,
  isDetailOpen: false,

  openDetail: (task) => set({ selectedTask: task, isDetailOpen: true }),

  closeDetail: () => set({ selectedTask: null, isDetailOpen: false }),


fetchTasks: async () => {
  set({ isLoading: true, errorMessage: null });
  try {
    const data = await taskApi.getTasks();
    set({ tasks: sortTasks(data) });

    const currentSelected = get().selectedTask;
    if (currentSelected) {
      const updatedTask = data.find((t) => t.id === currentSelected.id);
      if (updatedTask) {
        set({ selectedTask: updatedTask });
      } else {
        set({ selectedTask: null, isDetailOpen: false });
      }
    }
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    set({ errorMessage: "Something went wrong. Please try again." });
  } finally {
    set({ isLoading: false });
  }
},

  addTask: async (newTask) => {
    set({ isLoading: true, errorMessage: null });
    try {
      const createdTask = await taskApi.createTask(newTask);
      const isAlreadyExist = get().tasks.some((task) => task.id === createdTask.id);

      if (!isAlreadyExist) {
        set((state) => ({
          tasks: sortTasks([...state.tasks, createdTask])
        }));
      }
      
    } catch (error) {
      console.error("Failed to add task:", error);
      set({ errorMessage: "Could not add new task. Please try again." });
      } finally {
        set({ isLoading: false });
      }
  },

  updateTask: async (id, updatedFields) => {
    try {
      const updatedTask = await taskApi.updateTask(id, updatedFields);
      set((state) => ({
        tasks: sortTasks(state.tasks.map((task) => (task.id === id ? updatedTask : task))),
      }));
      const currentSelected = get().selectedTask;
      if (currentSelected && currentSelected.id === id) {
        set({ selectedTask: updatedTask });
      }

    } catch (error) {
      console.error("Failed to update task:", error);
      alert("Could not update task. Please try again.");
    }
  },
  
  toggleComplete: async (id) => {
    const currentTask = get().tasks.find((t) => t.id === id);
    if (!currentTask) return;

    try {
      await taskApi.toggleComplete(id);

      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      }));

      const currentSelected = get().selectedTask;
      if (currentSelected && currentSelected.id === id) {
        set({ selectedTask: { ...currentSelected, completed: !currentSelected.completed } });
      }
    } catch (error) {
      console.error("Failed to toggle complete:", error);
    }
  },
  
 
  toggleImportant: async (id) => {
    const currentTask = get().tasks.find((t) => t.id === id);
    if (!currentTask) return;

    try {
      await taskApi.toggleImportant(id);

      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, important: !task.important } : task
        ),
      }));

      const currentSelected = get().selectedTask;
      if (currentSelected && currentSelected.id === id) {
        set({ 
          selectedTask: { ...currentSelected, important: !currentSelected.important } 
        });
      }

    } catch (error) {
      console.error("Failed to toggle important:", error);
    }
  },

  deleteTask: async (id) => {
    try {
      await taskApi.deleteTask(id);
      
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
      }));

      // 💡 เพิ่มเติม: ถ้างานที่กำลังเปิดดู (Selected) คือตัวที่โดนลบ ให้สั่งปิดหน้าต่าง/เคลียร์ค่าทิ้งด้วย
      const currentSelected = get().selectedTask;
      if (currentSelected && currentSelected.id === id) {
        set({ selectedTask: null, isDetailOpen: false });
      }
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("Could not delete task. Please try again.");
    }
  }
}))