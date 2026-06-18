import type { Task } from "../../types/types"

type FilterValue = "all" | "active" | "completed";

type FilterProps = {
    tasks: Task[];
    activeValue: FilterValue;
    onChange: (value: FilterValue) => void;
}

const FILTERS: { name: string; value: FilterValue }[] = [
  { name: "All",       value: "all"       },
  { name: "Active",    value: "active"    },
  { name: "Completed", value: "completed" },
];

export default function FilterBar({ tasks, activeValue, onChange }: FilterProps) {

  const counts: Record<FilterValue, number> = {
    all:       tasks.length,
    active:    tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) =>  t.completed).length,
  };

  return (

        <div className="w-full mt-1.5 mb-2 flex items-center gap-2">
        
            {FILTERS.map(({ name, value }) => {

            const isActive = value === activeValue;
            
                return (
                    <button
                        key={value}
                        onClick={() => onChange(value)}
                        className={[
                        "px-4 py-1 rounded-[40px] font-medium text-[14px] transition-colors duration-150",
                        isActive
                            ? "bg-medium-green text-white"
                            : "bg-white text-text-filter hover:bg-[#e8f5e9]",
                        ].join(" ")}
                    >
                        {name} <span className="ml-1">( {counts[value]} )</span>
                    </button>
                );
            })}

        </div>

  );
}