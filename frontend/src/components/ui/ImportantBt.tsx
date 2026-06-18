import { IoIosStarOutline , IoIosStar } from "react-icons/io";
import type { Task } from "../../types/types"
import { useTaskStore } from "../../store/taskStore";

type ImportantBtProps = {
  task : Task;
  onClick?: () => void;
}

export const ImportantBt = ({ task, onClick }: ImportantBtProps) => {

    const { toggleImportant } = useTaskStore()
    const handleIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        
        if (onClick) {onClick(); } 
        else {toggleImportant(task.id); }
    };
    return (

        <div>
            <button 
                onClick={handleIconClick}
                className="
                cursor-pointer flex items-center justify-center
                text-star hover:text-text-all">
                {task.important ? (
                    <IoIosStar size={25} className="text-star" />   
                    ) : (
                    <IoIosStarOutline size={25} />                   
                    )
                }
            </button>
        </div>
    
    );

};