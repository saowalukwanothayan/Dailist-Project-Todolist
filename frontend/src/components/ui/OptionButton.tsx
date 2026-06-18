import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from "react";

import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { FiInfo } from "react-icons/fi";

import type { Task } from "../../types/types";
import { useTaskStore } from '../../store/taskStore';

import DeleteTaskPopup from "./DeleteTaskPopup";
import TaskForm from "./TaskForm";

type Props = {
    task: Task;
    showDetail?: boolean;
}

const OptionButton = ({
    task, 
    showDetail = false
}:Props) => {

    const {deleteTask , updateTask , openDetail} = useTaskStore();

    const handleDetail = () => {
        openDetail(task);
    };
    
    const [openTaskFormEdit, setOpenTaskFormEdit] = useState(false);
    const handleEdit = async (formData: Partial<Task>) => {
        await updateTask(task.id, {
        title: formData.title,
        date: formData.date,
        startTime: formData.startTime,
        endTime: formData.endTime,
        location: formData.location,
        description: formData.description,
        important: formData.important,
        });
        setOpenTaskFormEdit(false);
    };
    
    const [openDelete, setOpenDelete] = useState(false);
    const handleDeleteTask = async () => {
        await deleteTask(task.id); 
        setOpenDelete(false);
    };

    return (

        <>    
            <Menu>
                <MenuButton className="cursor-pointer flex items-center justify-center">
                    <IoEllipsisHorizontal className="w-5 h-5 text-text-all hover:text-medium-green"/>
                </MenuButton>
                <MenuItems 
                    anchor="bottom end"
                    modal={false}
                    className="
                        z-50
                        min-w-32
                        origin-top-right
                        rounded-xl
                        bg-white
                        shadow-lg"
                >
                    {showDetail && (
                        <MenuItem>
                            <button onClick={handleDetail}
                                className="
                                w-full px-4 py-2 flex items-center gap-2
                                font-medium text-[16px]
                                text-text-all hover:bg-gray-100"
                                >
                                <FiInfo size={18} className='text-info'/>
                                Detail
                            </button>
                        </MenuItem>
                    )}
                    <MenuItem>
                        <button onClick={() => setOpenTaskFormEdit(true)}
                            className="
                            w-full px-4 py-2 flex items-center gap-2
                            font-medium text-[16px]
                            text-text-all hover:bg-gray-100"
                            >
                            <MdEdit size={18} />
                            Edit
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setOpenDelete(true)}
                            className="
                            w-full px-4 py-2 flex items-center gap-2
                            font-medium text-[16px]
                            text-location hover:bg-gray-100"
                        >
                            <LuTrash2 size={16} />
                            Delete
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>

            {openTaskFormEdit && <TaskForm
                                        key={task.id}
                                        task={task}
                                        mode="edit"
                                        initialData={task}
                                        open={openTaskFormEdit}
                                        onCancel={() => setOpenTaskFormEdit(false)}
                                        onSubmit={handleEdit} 
                                />}
            {openDelete && <DeleteTaskPopup
                                        key={task.id}
                                        task={task}
                                        open={openDelete}
                                        onClose={() => setOpenDelete(false)} 
                                        onDelete={handleDeleteTask} />}

        </>        
    );
};

export default OptionButton;