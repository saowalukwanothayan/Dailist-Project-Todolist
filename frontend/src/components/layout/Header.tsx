import { useTime } from "../../hooks/useTime"
import { getDateParts , formatTime } from "../../utils/formatDate"
import { useLocation } from "react-router-dom";

export default function Header() {
  const time = useTime()
  const { weekday, day, month, year } = getDateParts(time)
  const formattime = formatTime(time)

  const dateText = `${weekday} ${day}`;
  const monthyearText = `${month} ${year}`;

  const location = useLocation();
  const title = location.pathname === "/aboutme" ? "ABOUT ME" : "TO-DO-LIST";
  

  return (
    <div className="flex flex-row justify-between items-center px-7 py-2 h-14 mb-1 font-Josefin">
        <div className="w-fit">
            <h1 className="text-[24px] font-bold text-dark-green" >
                {title}
            </h1>
        </div>
        <div className="flex flex-row gap-x-2 text-dark-green font-semibold text-[15px] items-center mr-3">
            <div className="leading-tight pr-3 border-r-2 border-r-dark-green">
                <p>{dateText}</p>
                <p>{monthyearText}</p>
            </div>
            <div>
                <p className="tracking-wide">{formattime}</p>
            </div>
        </div>
    </div>
  )
}