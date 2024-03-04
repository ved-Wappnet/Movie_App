// import "../../styles/AdminDash.css";
import { IoBagHandleSharp, IoAtCircleOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { FaDropbox, FaSlack } from "react-icons/fa";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Dashboard = () => {
  const data = [
    {
      ProjectName: (
        <>
          <FaDropbox /> Dropbox Design System
        </>
      ),
      Hours: 10,
      Priority: "High",
      views: 100,
      Likes: 50,
      status: "Published",
    },
    {
      ProjectName: (
        <>
          <FaSlack /> Slack Team UI Design
        </>
      ),
      Hours: 15,
      Priority: "Medium",
      views: 150,
      Likes: 70,
      status: "Published",
    },
    {
      ProjectName: (
        <>
          <FaGithub /> GitHub Satellite
        </>
      ),
      Hours: 20,
      Priority: "Low",
      views: 200,
      Likes: 80,
      status: "Published",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20 w-full">
      <div className="w-full max-w-screen-lg p-9 h-[100vh]">
        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-red-500"
          />
          <button className="bg-red-500 text-white py-2 px-4 rounded-md ml-2 focus:outline-none focus:bg-red-600">
            Search
          </button>
        </div>
        <div className="bg-purple-400 h-16 abso">Projects</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          <div className="bg-white p-4 rounded-md shadow-md h-[90%]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">18</h2>
              <IoBagHandleSharp className="bg-[#ff00005e] h-8 w-8" />
            </div>
            <p className="text-gray-500">2 Completed</p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md h-[90%]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">132</h2>
              <HiMenu className="bg-[#ff00005e] h-8 w-8" />
            </div>
            <p className="text-gray-500">28 Completed</p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md h-[90%]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">12</h2>
              <AiOutlineTeam className="bg-[#ff00005e] h-8 w-8" />
            </div>
            <p className="text-gray-500">1 Completed</p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md h-[90%]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">76%</h2>
              <IoAtCircleOutline className="bg-[#ff00005e] h-8 w-8" />
            </div>
            <p className="text-gray-500">5% Completed</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Active Projects</h1>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-red-600">
              View All
            </button>
          </div>

          <div className="flex flex-col">
            <div className="datatable-demo">
              <DataTable value={data}>
                <Column
                  field="ProjectName"
                  header="ProjectName"
                  className="flex gap-2"
                />
                <Column field="Hours" header="Hours" />
                <Column field="Priority" header="Priority" />
                <Column field="views" header="Views" />
                <Column field="Likes" header="Likes" />
                <Column field="status" header="Status" />
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
