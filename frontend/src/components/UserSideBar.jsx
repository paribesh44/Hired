import React from "react";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

import "./usersidebar.css";
import { usersidebardata } from "./usersidebardata";

function UserSideBar(props) {
  return (
    <div className="usersidebar">
      <ul className="unorderedlist">
        {usersidebardata.map((val, key) => {
          return (
            <div
              key={key}
              className={`${
                val.link.includes(window.location.pathname)
                  ? "wholeicon"
                  : "noneicon"
              }`}
            >
              <Link to={val.link[0]} className="linkclass">
                <li key={val.link[0]} className="homelistitems">
                  <div
                    className={`${
                      val.link.includes(window.location.pathname)
                        ? "selectedicon"
                        : "notselectedicon"
                    }`}
                  >
                    {val.icon}
                  </div>

                  <div className="sidebartext">{val.title}</div>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default UserSideBar;
