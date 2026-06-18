import { MdFormatListBulletedAdd } from "react-icons/md";

type EmptyTaskProps = {
  variant: "all" | "section";
};

const EmptyTask = ({ variant }: EmptyTaskProps) => {

    const isSection = variant === "section";

    return (
        <div className="flex flex-col items-center justify-center h-full w-full
          text-search text-center font-semibold m-0">
            <div className="flex justify-center">
              <MdFormatListBulletedAdd size={isSection ? 60 : 30} />
            </div>
            <p className= {isSection ? "text-[26px]" : "text-[14px]"}>No Task</p>
            <p className={isSection ? "text-[20px]" : "text-[12px]"}>
                " No tasks available in this section. "
            </p>
        </div>
    );
};

export default EmptyTask;