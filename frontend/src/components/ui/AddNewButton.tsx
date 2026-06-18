import { TiPlus } from "react-icons/ti";
import TaskForm from "./TaskForm";
import type { Task } from "../../types/types";

import { useState } from 'react';
import { useTaskStore } from '../../store/taskStore';

export default function Addnewbutton () {

  const addTask = useTaskStore((state) => state.addTask);
  const [openTaskFormAdd, setOpenTaskFormAdd] = useState(false);
  
  const handleAdd = async (formData: Omit<Task, 'id' | 'completed'>) => {
    await addTask({
      title: formData.title,
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      location: formData.location,
      description: formData.description,
      important: formData.important,
      completed: false
    });
    setOpenTaskFormAdd(false); 
  };
  return (
      <>
        <button
            onClick={() => setOpenTaskFormAdd(true)}
            className="
                w-50 h-13 py-2
                bg-dark-green text-white rounded-[15px] 
                flex justify-center items-center gap-x-1 
                transition-all duration-200 font-semibold text-[16px]
                border-2 border-transparent
                hover:bg-hover-green hover:text-text-all 
                hover:border-dark-green
            ">
            <TiPlus size={28} />
            <span>Add New List</span>
        </button>
        {openTaskFormAdd && (
          <TaskForm
            mode="add"
            open={openTaskFormAdd}
            onCancel={() => setOpenTaskFormAdd(false)}
            onSubmit={handleAdd}
          />
        )}
      </>
  )
}