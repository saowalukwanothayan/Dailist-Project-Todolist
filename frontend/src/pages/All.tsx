import { Outlet } from "react-router-dom"

export default function All() {


  return (
  
    <div className="flex-1 min-h-0 px-2 pb-4">
        <div className="h-full overflow-y-hidden bg-bg-content rounded-b-[25px]">
          
          <Outlet />

        </div>
    </div>

    
  )
}