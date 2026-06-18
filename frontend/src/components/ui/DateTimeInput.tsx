import { formatDate, formatTime } from "../../utils/dateTime"

import { FaCalendarDays } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";

import { useRef } from 'react'


//─── DateInput ───────────────────────────────────────────
type DateInputProps = {
  value: string;
  onChange: (val: string) => void;
};

export function DateInput( {value, onChange} : DateInputProps) {

  const InputRef = useRef<HTMLInputElement>(null)

  return (
      <div 
          onClick={() => InputRef.current?.showPicker()}
          className="relative flex items-center border-3 border-medium-green rounded-lg px-3 py-2">
          <span className={`flex-1 text-[14px] ${value ? 'text-text-all' : 'text-search'}`}>
              {value ? formatDate(value) : 'Select date'}
          </span>
          <FaCalendarDays size={18} className="text-text-all shrink-0"/>
          <input
            ref={InputRef}
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
      </div>
  );
}

// ─── TimeRangeInput ──────────────────────────────────────
type TimeRangeInputProps = {
  startTime: string;
  endTime: string;
  onStartChange: (val: string) => void;
  onEndChange: (val: string) => void;
};

export function TimeRangeInput({ startTime, endTime, onStartChange, onEndChange }: TimeRangeInputProps) {

  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

  return (
      <div className="flex items-center gap-2">

        <div  
          onClick={() => startInputRef.current?.showPicker()}
          className="relative flex flex-1 items-center border-3 border-medium-green rounded-lg px-3 py-2">
            <span className={`flex-1 text-[14px] ${startTime ? 'text-text-all' : 'text-search'}`}>
              {startTime ? formatTime(startTime) : 'Start time'}
            </span>
            <FaRegClock size={14} className="text-text-all shrink-0" />
            <input
              ref={startInputRef}
              type="time"
              value={startTime} 
              onChange={(e) => onStartChange(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer" />
        </div>

        <span className="text-search text-sm">—</span>

        <div 
          onClick={() => endInputRef.current?.showPicker()}
          className="relative flex flex-1 items-center border-3 border-medium-green rounded-lg px-3 py-2">
            <span className={`flex-1 text-[14px] ${endTime ? 'text-text-all' : 'text-search'}`}>
              {endTime ? formatTime(endTime) : 'End time'}
            </span>
            <FaRegClock size={14} className="text-text-all shrink-0" />
            <input
              ref={endInputRef}
              type="time"
              value={endTime} 
              onChange={(e) => onEndChange(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer" />
        </div>

      </div>
  );
}