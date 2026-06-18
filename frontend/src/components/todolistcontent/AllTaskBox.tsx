import DataTaskItem from "./DataTaskItem"
import type { Task } from "../../types/types";
import EmptyTask from './EmptyTask';

type AllTaskBoxProps = {
  title?: string;
  tasks: Task[];
  columnSize: number;
  className?: string;
  icon?: React.ReactNode;
  scrollDirection?: 'horizontal' | 'vertical';          
  onSeeMore: () => void;
  children?: React.ReactNode;
}

export const AllTaskBox : React.FC<AllTaskBoxProps> = ({
        title,
        tasks,
        columnSize,
        className,
        icon,
        scrollDirection = 'horizontal',
        onSeeMore,
        children,
    }) => {

    const columns = [];
        for (let i = 0; i < tasks.length; i += columnSize) {
            columns.push(tasks.slice(i, i + columnSize));
        }

    
    return (

        <div className={`group rounded-xl border border-dark-green bg-bg-green
            px-2 pt-1 pb-0.5 ${className} flex flex-col flex-1 overflow-hidden`}>
            
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        {icon && <span className="text-[22px]">{icon}</span>}
                        <h2 className=" flex items-center text-[16px] font-bold text-dark-green shrink-0">
                            <span>{title}</span>
                            {children}
                            <span className="ml-2">( {tasks.length} )</span>
                        </h2>
                    </div>
                    
                    {/* See more button */}
                    <button
                        onClick={onSeeMore}
                        className="text-[14px] font-bold underline
                        text-dark-green hover:text-search" >
                        See more
                    </button>
                </div>
                <hr className="mt-1 border-t-2 border-dark-green" />

                {tasks.length === 0 
                    ?   
                        <EmptyTask variant="all"/>
                                            
                    :
                        <div className={`flex-1 w-full mt-1 ${
                                
                            scrollDirection === 'horizontal'
                            ? 'overflow-x-auto [&::-webkit-scrollbar]:h-2'
                            : 'overflow-y-auto [&::-webkit-scrollbar]:w-2'}
                                
                                [&::-webkit-scrollbar-track]:bg-transparent
                                [&::-webkit-scrollbar-thumb]:bg-transparent
                                [&::-webkit-scrollbar-thumb]:rounded-full
                                group-hover:[&::-webkit-scrollbar-thumb]:bg-medium-green`}>
                                
                                <div className={
                                    scrollDirection === 'horizontal'
                                        ? "flex gap-x-4 min-w-max"
                                        : "flex flex-col w-full pr-1"
                                    }>
                                    {scrollDirection === 'horizontal' ? (
                                        columns.map((col, i) => (
                                            <div key={i} className={
                                                scrollDirection === 'horizontal'
                                                ? "flex flex-col min-w-70"
                                                : "flex flex-col w-full"
                                            }>
                                                {col.map((task) => (
                                                    <DataTaskItem 
                                                        key={task.id}
                                                        task={task}
                                                    />
                                                ))}
                                            </div>
                                        ))
                                    ) : (
                                        tasks.map((task) => (
                                            <DataTaskItem 
                                                key={task.id}
                                                task={task}
                                            />
                                            ))
                                    )}
                                </div>
                        </div>
                }
        </div>
    );
};