import type { Task } from "../../types/types";
import OptionButton from "../ui/OptionButton";
import { useTaskStore } from "../../store/taskStore";

type DataTaskItemProp = {
  task: Task;
};

const DataTaskItem = ({ task  }: DataTaskItemProp) => {

    const { toggleComplete } = useTaskStore()

    return (

        <div className="flex items-center gap-2 mb-0.5">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="
                    h-5 w-5
                    rounded-md
                    cursor-pointer 
                    accent-white"
            />
            <span className={`text-[16px] flex-1 font-medium shrink-0
                ${task.completed ? "line-through text-gray-400" : "text-text-all"}`}>
                {task.title}
            </span>
            <>
                <OptionButton 
                    task={task}
                    showDetail={true}
                />
            </>
            
        </div>
    );
};
export default DataTaskItem;