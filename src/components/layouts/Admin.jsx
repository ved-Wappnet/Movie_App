import { Outlet } from "react-router-dom";

import Outer from "./Outer";
import "./Admin.css";
import Sidebar from "./Sidebar";

const Admin = () => {
  return (
    <Outer>
      <div className="flex">
        <Sidebar />
        <div className="content">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </Outer>
  );
};

export default Admin;
