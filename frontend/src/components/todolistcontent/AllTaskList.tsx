import { IoIosStar } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

import { useTaskStore } from "../../store/taskStore";
import { isToday, isThisWeek, isThisMonth } from "../../utils/dateHelpers";

import { AllTaskBox } from "./AllTaskBox"
import TaskCardPopup from '../ui/TaskCardPopup';
import { type Task } from "../../types/types";

import { useNavigate } from "react-router-dom";
import { useState , useRef , useEffect } from 'react';

import { formatDate } from "../../utils/dateTime"



export default function AllTaskList() {

  const { tasks, errorMessage, isLoading, fetchTasks, isDetailOpen, selectedTask, closeDetail } = useTaskStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]); 

  const inputRef = useRef<HTMLInputElement>(null);


  const todayTasks = tasks.filter(task => isToday(task.date));
  const weekTasks = tasks.filter(task => isThisWeek(task.date));
  const monthTasks = tasks.filter(task => isThisMonth(task.date));
  
  const importantTasks = tasks.filter(task => task.important);
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const [selectedDate, setSelectedDate] = useState<string>("");
  const selectDateTasks = tasks ? tasks.filter((task: Task) => {
    if (!selectedDate) {
      return false;
    }
    return task.date === selectedDate; 
  }) : [];

  const handleSeeMore = () => {
    if (selectedDate) {
      navigate(`/all/selectdate?date=${selectedDate}`);
    } else {
      navigate("/all/selectdate");
    }
  };
  if (errorMessage) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="text-red-500 font-bold">⚠️ {errorMessage}</div>
        <button 
          onClick={fetchTasks} 
          className="px-4 py-2 bg-dark-green text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    );
  }                
  return (
      <>
      {isLoading ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200    
            border-t-dark-green">
            </div>
            <p className="text-lg font-bold text-dark-green animate-pulse">
              Loading tasks...
            </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 px-4 py-1.5 h-full min-h-0 overflow-hidden">
          
          <div className="grid grid-rows-[1fr_1fr] h-full gap-2 min-h-0">
            <div className="grid grid-cols-2 gap-2 min-h-0">

                <AllTaskBox 
                  title="Today's Task" 
                  tasks={todayTasks} 
                  columnSize={10}
                  scrollDirection="vertical"
                  onSeeMore={() => navigate("/all/todaytask")}
                />

                <AllTaskBox  
                  tasks={selectDateTasks} 
                  columnSize={10}
                  scrollDirection="vertical"
                  onSeeMore={handleSeeMore}
                >
                    <div className="flex items-center gap-1">
                      <div 
                        onClick={() => inputRef.current?.showPicker()}
                        className="relative flex items-center border-2 border-medium-green rounded-lg px-2 py-0.5 gap-2 bg-white cursor-pointer"
                      >
                        <span className={`flex-1 text-[13px] mr-1 ${selectedDate ? 'text-text-all font-medium' : 'text-search'}`}>
                          {selectedDate ? formatDate(selectedDate) : 'Select date'}
                        </span>
                        <FaCalendarDays size={12} className="text-text-all shrink-0"/>
                        <input 
                          ref={inputRef}
                          type="date" 
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="absolute inset-0 opacity-0 pointer-events-none"
                        />
                      </div>
                      
                      {selectedDate && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDate("");
                          }}
                          className="text-red-500 hover:text-red-700 text-sm font-bold"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                </AllTaskBox>

            </div>
            <div className="grid grid-cols-2 gap-2 min-h-0">

                <AllTaskBox 
                  title="This Week" 
                  tasks={weekTasks} 
                  columnSize={10}
                  scrollDirection="vertical"
                  onSeeMore={() => navigate("/all/thisweek")}
                />

                <AllTaskBox 
                  title="This Month" 
                  tasks={monthTasks} 
                  columnSize={10}
                  scrollDirection="vertical"
                  onSeeMore={() => navigate("/all/thismonth")}
                />

            </div>
          </div>
          
          <div className="flex flex-col gap-2 h-full">
            <AllTaskBox 
                title="Important"
                tasks={importantTasks}
                columnSize={5} 
                className="flex-3"
                icon={<IoIosStar className="text-star" />}
                onSeeMore={() => navigate("/all/important")}
            />
              
            <AllTaskBox
                title="Active"
                tasks={activeTasks}
                columnSize={8}
                className="flex-4"
                icon={<FaCircle className="text-medium-green" />}
                onSeeMore={() => navigate("/all/active")}
            />
            <AllTaskBox 
                title="Completed"
                tasks={completedTasks}
                columnSize={3}
                className="flex-2"
                icon={<FaRegCheckCircle className="text-text-all" />}
                onSeeMore={() => navigate("/all/completed")}
            />
          </div>
        </div>
        )}

        {isDetailOpen && selectedTask && (
          <TaskCardPopup 
            task={selectedTask}  
            onClose={closeDetail}   
          />
        )}
        
      </>
  )

}