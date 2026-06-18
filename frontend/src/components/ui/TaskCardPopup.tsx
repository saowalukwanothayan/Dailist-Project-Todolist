import { IoClose } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";

import { ImportantBt } from "./ImportantBt"
import type { Task } from "../../types/types"
import { formatDate , formatTime } from "../../utils/dateTime"
import { useTaskStore } from "../../store/taskStore";


type TaskCardPopup = {
    task: Task;
    onClose: () => void;
};

const TaskCardPopup = ({ task, onClose }: TaskCardPopup) => {

    const { toggleComplete } = useTaskStore()

    return (

        <div className="fixed inset-0 z-50 flex justify-center bg-black/40">
            <div className="flex flex-col mt-40 text-text-all">
                <button 
                        onClick={onClose}
                        className="w-10 h-10 bg-taskcard rounded-[10px] self-end mb-2
                        flex justify-center items-center cursor-pointer
                         hover:bg-location">
                    <IoClose size={40} className="text-location hover:text-white"/>
                </button>

                <div className="bg-taskcard rounded-4xl px-6 py-3 w-120 h-62
                    flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-[20px] font-bold">
                                {formatDate(task.date)}
                            </h2>
                        </div>
                        <hr className="border-t-2 border-star mt-1 mb-2" />
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleComplete(task.id)}
                                className="
                                    h-7 w-7
                                    rounded-md
                                    cursor-default 
                                    accent-white"
                                />    
                                <h2 className= {`min-w-60 shrink-0 text-[22px] font-bold 
                                    ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                    {task.title}
                                </h2>
                            </div>
                                <ImportantBt task={task} />
                        </div>
                        <div className="mt-2">
                            <p className="font-light text-[16px] line-clamp-3">
                                {task.description}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <FaLocationDot size={20} className="text-location" />
                            <h2 className="text-[16px] font-medium ml-2">
                                {task.location}
                            </h2>
                        </div>
                        <div className="flex items-center mt-1.5">
                            <FaRegClock size={20} className="text-time" />
                            <h2 className="text-[16px] font-medium ml-2">
                                {`${formatTime(task.startTime)} - ${formatTime(task.endTime)}`}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TaskCardPopup;