
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";

import { ImportantBt } from './ImportantBt';
import OptionButton from "./OptionButton";


import type { Task } from "../../types/types"
import { formatDate , formatTime } from "../../utils/dateTime"
import { truncateText } from '../../utils/string';
import { useTaskStore } from "../../store/taskStore";



type TaskCardProps = {
  showDate: boolean;
  task: Task;
};


export default function TaskCard({
    showDate,
    task, 
}: TaskCardProps) {

    const { toggleComplete } = useTaskStore()

    return (

    <div className="h-42" >
        <div className= {`rounded-[15px] px-4 py-3 text-text-all 
             ${task.completed ? 'bg-gray-300' : 'bg-taskcard'}`}>

            <div className={`flex flex-col justify-between 
                    ${task.completed ? 'text-gray-500' : ''}`}>
                <div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleComplete(task.id)}
                                className="
                                    h-6 w-6
                                    rounded-md
                                    cursor-pointer
                                    accent-white"
                            />
                            <h2 className= {`ml-3 min-w-60 shrink-0 text-[18px] font-semibold
                                ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                {truncateText(task.title, 25)}
                            </h2>
                        </div>
                        <div className="flex items-center gap-2.5">
                            
                            <ImportantBt task={task} />
                            <OptionButton task={task} />
                            
                        </div>
                    </div>

                    <div className="mt-2 pb-1 h-16">
                        <p className="font-light text-[12px] line-clamp-3">
                            {task.description}
                        </p>
                    </div>
                </div>

                <div> 

                    <div className="flex items-center mb-0.5">
                        <FaLocationDot size={15} className="text-location" />
                        <h2 className="text-[14px] font-medium ml-2">
                            {task.location}
                        </h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <FaRegClock size={15} className="text-time" />
                            <h2 className="text-[14px] font-medium ml-2">
                                {`${formatTime(task.startTime)} - ${formatTime(task.endTime)}`}
                            </h2>
                        </div>
                        <div className="flex items-center">
                            {showDate && 
                                <h2 className="text-[14px] font-medium">
                                    {formatDate(task.date)}
                                </h2>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}