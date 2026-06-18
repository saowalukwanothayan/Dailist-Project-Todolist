import { NavLink } from "react-router-dom";
import { BsFlower1 } from "react-icons/bs"
import { GoTasklist } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";

import AddNewButton from "../ui/AddNewButton"
import SideBarItem from "./SideBarItem"


export default function SideBar() {

  return (
    <div className="w-64 h-screen px-3 py-0 flex flex-col justify-start">

      <div>
        <h1 className="flex items-center gap-2 text-[40px] font-Jockey text-dark-green">
          <BsFlower1 size={40}/>DAILIST</h1>
      </div>
      <div className="flex flex-col flex-1 pt-2 pb-4 gap-3">
            <div className="flex items-center justify-center">
              <AddNewButton />
            </div>

            <NavLink to="/all" className="no-underline">
              {({ isActive }) => (
                <SideBarItem
                  label="All"
                  icon={GoTasklist}
                  active={isActive}
                />
                )}
            </NavLink>

            <div className="mt-auto">
              <NavLink to="/aboutme" className="no-underline">
                {({ isActive }) => (
                  <SideBarItem
                  label="About Me"
                  icon={CgWebsite}
                  active={isActive}
                  />
                )}
              </NavLink>
            </div>
      </div>
    </div>
  )
}