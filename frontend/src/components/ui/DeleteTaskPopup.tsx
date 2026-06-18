import { LuTrash2 } from "react-icons/lu";

import type { Task } from "../../types/types"

type DeleteTaskPopupProps = {
    task: Task;
    open: boolean;
    onClose: () => void;
    onDelete: (id: string) => void;
};

const DeleteTaskPopup = ({task, open, onClose, onDelete,}: DeleteTaskPopupProps) => {

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-bg-delete rounded-4xl pt-5 pb-3 w-100 h-50
                flex flex-col items-center justify-between">

                <div className="flex flex-col items-center justify-center text-black">

                    <LuTrash2 size={50} className="text-location" />
                    <h2 className="text-[22px] font-bold mt-2">
                        Delete Task
                    </h2>
                    <p className="text-[16px]">
                        Are you sure you want to delete this task ?
                    </p>

                </div>

                <div className="flex gap-4">

                    <button className="w-26 px-6 py-2 rounded-[15px]
                        border-2 border-location
                        transition-all duration-300 hover:scale-110
                        font-medium text-text-all"

                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button className="w-26 px-6 py-2 rounded-[15px]
                        border-2 border-location bg-location
                        transition-all duration-300 hover:scale-110
                        text-white font-medium"

                        onClick={() => onDelete(task.id)}
                    >
                        Delete
                    </button>

                </div>

            </div>            
        </div>
    );
};
export default DeleteTaskPopup;