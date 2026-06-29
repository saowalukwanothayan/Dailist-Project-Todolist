import { useState } from "react";
import { useParams , useNavigate , useSearchParams } from "react-router-dom";

import FilterBar from '../ui/FilterBar';
import EmptyTask from './EmptyTask';
import TaskCard from '../ui/TaskCard';
import { type Task } from "../../types/types";

import { useTaskStore } from "../../store/taskStore";
import { isToday, isThisWeek, isThisMonth } from "../../utils/dateHelpers";
import { formatDate } from "../../utils/dateTime"

import { IoArrowBackCircle } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaCircle } from "react-icons/fa";   
import { FaRegCheckCircle } from "react-icons/fa";



export const SectionAllBox = () => {

  const { tasks } = useTaskStore()

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get('date');

  let displayTitle = "";
  let displayIcon: React.ReactNode = null;
  let currentBoxTasks = tasks;

  switch (section?.toLowerCase()) {
    case "todaytask":
      displayTitle = "Today's Task";
      displayIcon = null;
      currentBoxTasks = tasks.filter((t) => isToday(t.date));
      break;
    case "selectdate":
      displayTitle = selectedDate ? `${formatDate(selectedDate)}` : "Please Select a date";
      displayIcon = null;
      currentBoxTasks = selectedDate && tasks
        ? tasks.filter((t: Task) => t.date === selectedDate)
        : [];
      break;
    case "thisweek":
      displayTitle = "This Week";
      displayIcon = null;
      currentBoxTasks = tasks.filter((t) => isThisWeek(t.date));
      break;
      case "thismonth":
      displayTitle = "This Month";
      displayIcon = null; 
      currentBoxTasks = tasks.filter((t) => isThisMonth(t.date));
      break;
    case "important":
      displayTitle = "Important";
      displayIcon = <IoIosStar className="text-star text-2xl" />;
      currentBoxTasks = tasks.filter(t => t.important);
      break;
    case "active":
      displayTitle = "Active";
      displayIcon = <FaCircle className="text-medium-green text-2xl" />;
      currentBoxTasks = tasks.filter(t => !t.completed);
      break;
    case "completed":
      displayTitle = "Completed";
      displayIcon = <FaRegCheckCircle className="text-text-all text-2xl" />;
      currentBoxTasks = tasks.filter(t => t.completed);
      break;
    default:
      navigate("/all", { replace: true });
    break;
  }

  const filteredTasks = currentBoxTasks.filter((task) => {
    if (filter === "active") return !task.completed;   
    if (filter === "completed") return task.completed;
    return true;
  });


    
  return (

      <div className="h-full w-full px-5 flex flex-col">
          <div className="flex mt-1 h-11 items-center text-center gap-4">

              <button 
                onClick={() => navigate("/all")}
                className="flex items-center justify-center">
                <IoArrowBackCircle size={40} className="text-text-all"/>
              </button>
              <div className="flex items-center gap-2">
                {displayIcon}
                <h1 className="text-[26px] font-bold text-text-all">
                  {displayTitle}
                </h1>
              </div>
          </div>

          <hr className="border-t-2 border-dark-green " />

          <FilterBar
            tasks={currentBoxTasks}
            activeValue={filter}
            onChange={(value) => setFilter(value)}
          />

          <div className="flex flex-1 h-full min-h-0">

              {filteredTasks.length === 0 ? (
                
                <div className="h-full flex w-full items-center justify-center">
                  <EmptyTask variant="section"/>
                </div>
              ) : (

                <div className="grid grid-cols-3 auto-rows-auto gap-5 overflow-y-auto mt-2 items-start content-start">
                    
                    {filteredTasks.map((task) => (
                      
                        <TaskCard
                          key={task.id}
                          showDate={true} 
                          task={task}
                        />
                      
                    ))}

                </div>
              )}

          </div>
      </div>
  );
};