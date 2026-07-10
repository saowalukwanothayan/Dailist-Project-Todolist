import { useState } from "react";
import { DateInput, TimeRangeInput } from "./DateTimeInput";
import type { Task } from "../../types/types"
import { ImportantBt } from "./ImportantBt"
import { validateTaskDateTime } from "../../utils/dateTime";
import { useTaskStore } from "../../store/taskStore";

type TaskFormProps = {
  task?: Task;
  open: boolean;
  onCancel: () => void;
  onSubmit: (task: Omit<Task, "id">) => void;
  mode: "add" | "edit";
  initialData?: Task;
};

export default function TaskForm({
    task, 
    mode, 
    initialData, 
    onSubmit, 
    onCancel, 
    }: TaskFormProps) {

  const { toggleImportant } = useTaskStore()

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [dateVal, setDateVal] = useState(initialData?.date ?? "");
  const [startTime, setStartTime] = useState(initialData?.startTime ?? "");
  const [endTime, setEndTime] = useState((initialData?.endTime ?? ""));
  const [location, setLocation] = useState(initialData?.location ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [isImportant, setIsImportant] = useState(initialData?.important ?? false);
  const [isCompleted] = useState(initialData?.completed ?? false);

  const handleSubmit = () => {
    if (
      !title.trim() || 
      !dateVal || 
      !startTime || 
      !endTime
    ) {
      alert("Please fill in all required fields! (Title, Date, Start Time, End Time)");
      return;
    }
    const errorMessage = validateTaskDateTime(dateVal, startTime, endTime);
    if (errorMessage) {
        alert(errorMessage);
        return;
    }
    if (isImportant !== initialData?.important && mode !== "add" && initialData?.id) {
        toggleImportant(initialData?.id);
    }   
    onSubmit({ 
        title, 
        date: dateVal, 
        startTime, 
        endTime, 
        location, 
        description,
        completed: initialData?.completed ?? false,
        important: isImportant, 
    });
  };
  const nameMode = mode === "add" ? "Add New List" : "Edit Task";
  const SubmitLabel = mode === "add" ? "Add New" : "Edit";

 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-bg-content rounded-4xl px-5 py-3 w-120 h-140
                flex flex-col items-center justify-between text-[14px]">
          <div className="h-full w-full flex flex-col">
                <h1 className="text-[28px] font-bold text-dark-green text-center">
                    {nameMode}
                </h1>
                <hr className="border-t-3 my-1.5 border-dark-green " />

                <div className="px-8 space-y-1">

                    {/* Task Name */}
                    <div className="space-y-1">
                        <label className="text-[14px] font-medium text-dark-green">Task Name</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter task name"
                                maxLength={25}
                                className="w-full border-3 border-medium-green
                                rounded-lg px-3 py-2 text-text-all cursor-pointer"
                            />

                            <ImportantBt 
                                task={{
                                    id: task?.id ?? '',
                                    title: title,
                                    date: dateVal,
                                    startTime: startTime,
                                    endTime: endTime,
                                    location: location,
                                    description: description,
                                    completed: isCompleted,
                                    important: isImportant
                                }} 
                                onClick={() => setIsImportant(!isImportant)} 
                                />
                        </div>
                    </div>
        
                    {/* Date */}

                    <div className="space-y-1">
                        <label className="text-[14px] font-medium text-dark-green">Date</label>
                        <DateInput value={dateVal} onChange={setDateVal} />
                    </div>
        
                    {/* Time */}

                    <div className="space-y-1">
                        <label className="text-[14px] font-medium text-dark-green">Time</label>
                        <TimeRangeInput
                            startTime={startTime}
                            endTime={endTime}
                            onStartChange={setStartTime}
                            onEndChange={setEndTime}
                        />
                    </div>

                    {/* Location */}
                    <div className="space-y-1">
                        <label className="text-[14px] font-medium text-dark-green">Location</label>
                        <textarea
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter Location"
                            rows={1}
                            className="w-full border-3 border-medium-green
                            rounded-lg px-3 py-2 text-text-all cursor-pointer resize-none"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                    <label className="text-[14px] font-medium text-dark-green">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        rows={3}
                        className="w-full border-3 border-medium-green
                            rounded-lg px-3 py-2 text-text-all cursor-pointer resize-none"
                    />
                    </div>
                </div>
            </div>
 
            {/* Buttons */}
            <div className="flex gap-8 mb-5 text-[16px]">
                <button
                    onClick={onCancel}
                    className="w-35 px-7 py-3 rounded-[15px]
                        border-2 border-medium-green
                        transition-all duration-300 hover:scale-110
                        font-medium text-text-all"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="w-35 px-6 py-2 rounded-[15px]
                        border-2 border-dark-green bg-dark-green
                        transition-all duration-300 hover:scale-110
                        font-bold text-white"
                >
                    {SubmitLabel}
                </button>
            </div>
      </div>
    </div>
  );
}