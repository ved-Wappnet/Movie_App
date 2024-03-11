import "./profile.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoComment, GoShareAndroid } from "react-icons/go";
import { FiPhoneCall, FiVideo } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="mt-24 px-5 h-auto">
      <header>
        <h1 className="text-white  font-medium text-2xl mb-3 ml-2">Overview</h1>
      </header>
      <hr style={{ borderColor: "#ab9d9d", marginBottom: "20px" }} />
      {/* box */}
      <div className="box text-black bg-white h-80 w-full rounded">
        <div className="halfup rounded-t relative md:relative">
          <img
            src="https://dash-ui-admin-template.vercel.app/images/background/profile-cover.jpg"
            alt=""
            className="w-full h-[160px]"
          />
        </div>
        <div className="halfdown rounded-b flex">
          <div className="md:absolute absolute top-[33%] right-[0%] md:top-[38%] md:left-[18.5%] ">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEW0FV_w2pRlw/profile-displayphoto-shrink_100_100/0/1669697366136?e=1715212800&v=beta&t=cMigVBkT3aGJMDoQRZcOOOg8R5B29RZ3KUtpj15LiOY"
              alt=""
              className="rounded-full h-28 outline-white outline z-10"
            />
          </div>
          <div className="ml-36 mt-5">
            <h2 className="font-medium text-3xl">Ved Panchal</h2>
            <p className="text-gray-500">@vedpanchal</p>
          </div>
          <div className="md:ml-[65%] ml-[15%] mt-7 mb-6">
            <button className="h-10 w-28 bg-white rounded-xl px-3 border border-purple-500 font-medium hover:bg-purple-500 hover:text-white">
              Edit Profile
            </button>
          </div>
        </div>
        <hr style={{ borderColor: "#ab9d9d", marginBottom: "20px" }} />
        <div className="nav ml-9">
          <ul className="flex gap-5 font-medium cursor-pointer">
            <li className="hover:text-purple-500 hover:before:border-purple-500 hover:before:w-full">
              Overview
            </li>
            <li className="hover:text-purple-500 hover:before:border-purple-500 hover:before:w-full">
              Project
            </li>
            <li className="hover:text-purple-500 hover:before:border-purple-500 hover:before:w-full">
              Files
            </li>
            <li className="hover:text-purple-500 hover:before:border-purple-500 hover:before:w-full">
              Teams
            </li>
            <li className="hover:text-purple-500 hover:before:border-purple-500 hover:before:w-full">
              Followers
            </li>
            <li className="hover:text-purple-500 hover:before:border-purple-500 hover:before:w-full">
              Activity
            </li>
          </ul>
        </div>
      </div>

      {/* two boxes */}
      <section>
        <div className="container py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded-xl">
                <h2 className="font-medium text-xl mb-5">About Me</h2>
                <div>
                  <h3 className="mb-2 font-medium">BIO</h3>
                  <p className=" mb-5 text-[#637381]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspen disse var ius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="mb-1 font-medium">POSITION</h3>
                  <p className="text-[#637381]">Theme designer at Bootstrap.</p>
                </div>
                <div className="flex gap-40">
                  <div>
                    <div className="mb-2">
                      <h3 className="font-medium mb-1">PHONE</h3>
                      <p className="text-[#637381]">+32112345689</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">EMAIL</h3>
                      <p className="text-[#637381]">Dashui@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <h3 className="font-medium mb-1">DATE OF BIRTH</h3>
                      <p className="text-[#637381]">01.10.1997</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">LOCATION</h3>
                      <p className="text-[#637381]">Ahmedabad, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded-xl">
                <h2 className="font-medium text-xl mb-6">
                  Projects Contributions
                </h2>
                <div className="flex gap-4 mb-4">
                  <div className="img  md:border border-gray-400 rounded py-5 px-2 md:py-3 md:px-2">
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/brand/slack-logo.svg"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h2>Slack Figma Design UI</h2>
                    <p>Project description and details about...</p>
                  </div>
                  <div className="users relative ml-24">
                    <div className="h-10 w-10 flex">
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-6.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[150%] z-20"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-5.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[110%] z-10"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-4.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[80%]"
                      />
                      <BsThreeDotsVertical className="absolute top-[20%] left-[260%] cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="img  md:border border-gray-400 rounded py-5 px-2 md:py-3 md:px-2">
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/brand/3dsmax-logo.svg"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h2>Slack Figma Design UI</h2>
                    <p>Project description and details about...</p>
                  </div>
                  <div className="users relative ml-24">
                    <div className="h-10 w-10 flex">
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-6.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[150%] z-20"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-5.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[110%] z-10"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-4.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[70%]"
                      />
                      <BsThreeDotsVertical className="absolute top-[20%] left-[270%] cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="img  md:border border-gray-400 rounded py-5 px-2 md:py-3 md:px-2">
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/brand/github-logo.svg"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h2>Slack Figma Design UI</h2>
                    <p>Project description and details about...</p>
                  </div>
                  <div className="users relative ml-24">
                    <div className="h-10 w-10 flex">
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-6.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[150%] z-20"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-5.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[110%] z-10"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-4.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[70%]"
                      />
                      <BsThreeDotsVertical className="absolute top-[20%] left-[270%] cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="img  md:border border-gray-400 rounded py-5 px-2 md:py-3 md:px-2">
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/brand/dropbox-logo.svg"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h2>Slack Figma Design UI</h2>
                    <p>Project description and details about...</p>
                  </div>
                  <div className="users relative ml-24">
                    <div className="h-10 w-10 flex">
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-6.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[150%] z-20"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-5.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[110%] z-10"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-4.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[70%]"
                      />
                      <BsThreeDotsVertical className="absolute top-[20%] left-[270%] cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="img  md:border border-gray-400 rounded py-5 px-2 md:py-3 md:px-2 bg-purple-500 ">
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/brand/layers-logo.svg"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <h2>Slack Figma Design UI</h2>
                    <p>Project description and details about...</p>
                  </div>
                  <div className="users relative ml-24">
                    <div className="h-10 w-10 flex">
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-6.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[150%] z-20"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-5.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[110%] z-10"
                      />
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-4.jpg"
                        alt=""
                        className="rounded-full absolute top-[2%] left-[80%]"
                      />
                      <BsThreeDotsVertical className="absolute top-[20%] left-[260%] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* three boxe */}
      <section>
        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-auto rounded-xl bg-gray-100 p-4">
                <div className="flex mb-5">
                  <div className="rounded">
                    <img
                      src="https://media.licdn.com/dms/image/D4D03AQEW0FV_w2pRlw/profile-displayphoto-shrink_100_100/0/1669697366136?e=1715212800&v=beta&t=cMigVBkT3aGJMDoQRZcOOOg8R5B29RZ3KUtpj15LiOY"
                      alt=""
                      className="h-12 w-60 rounded-full"
                    />
                  </div>
                  <div className="ml-4 mb-0 w-full">
                    <h2 className="font-medium">Ved Panchal</h2>
                    <p className="text-[#637381]">19 minutes ago</p>
                  </div>
                  <div>
                    <BsThreeDotsVertical className="ml-96 mt-2" />
                  </div>
                </div>
                <div className="mb-4">
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspen disse var ius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <img
                    src="https://dash-ui-admin-template.vercel.app/images/blog/blog-img-1.jpg"
                    alt=""
                    className="w-full rounded-xl mb-4"
                  />
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <FaRegHeart className="mr-1" />
                      <span>20 Likes</span>
                    </div>
                    <div className="flex items-center">
                      <GoComment className="mr-1" />
                      <span>12 Comments</span> mb-4
                    </div>
                    <div className="flex items-center">
                      <GoShareAndroid className="mr-1" />
                      <span>Share</span>
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    borderColor: "rgb(171 157 157 / 66%)",
                    marginBottom: "20px",
                  }}
                />
                <div className="flex">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQEW0FV_w2pRlw/profile-displayphoto-shrink_100_100/0/1669697366136?e=1715212800&v=beta&t=cMigVBkT3aGJMDoQRZcOOOg8R5B29RZ3KUtpj15LiOY"
                    alt=""
                    className="h-12 w-12 rounded-full mr-2"
                  />
                  <div>
                    <label className="mr-3">Name</label>
                    <input
                      type="text"
                      alt="post"
                      className="h-9 w-96 border border-gray-500 px-3 focus:border-2 focus:outline-none focus:border-purple-400 rounded-lg mr-3"
                    />
                    <button className="bg-purple-500 px-4 py-2 rounded-xl text-white hover:bg-purple-700">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/2 w-full">
              {/* 1-box */}
              <div className="h-auto bg-gray-100 p-4 rounded-xl mb-5">
                <h2 className="font-medium text-xl mb-5">My Team</h2>
                <div className="flex mb-4">
                  <div>
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-1.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full mr-4"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium">Dianna Smiley</h2>
                    <p className="text-[#637381]">UI / UX Designer</p>
                  </div>
                  <div className="flex gap-4 ml-auto">
                    <FiPhoneCall className="h-10 w-5" />
                    <FiVideo className="h-10 w-5" />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div>
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-2.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full mr-4"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium">Anne Brewer</h2>
                    <p className="text-[#637381]">Senior UX Designer</p>
                  </div>
                  <div className="flex gap-4 ml-auto">
                    <FiPhoneCall className="h-10 w-5" />
                    <FiVideo className="h-10 w-5" />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div>
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-3.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full mr-4"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium w-full">Richard Christmas</h2>
                    <p className="text-[#637381]">Front-End Engineer</p>
                  </div>
                  <div className="flex gap-4 ml-auto">
                    <FiPhoneCall className="h-10 w-5" />
                    <FiVideo className="h-10 w-5" />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div>
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-4.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full mr-4"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium">Nicholas Binder</h2>
                    <p className="text-[#637381]">Content Marketing Manager</p>
                  </div>
                  <div className="flex gap-4 ml-auto">
                    <FiPhoneCall className="h-10 w-5" />
                    <FiVideo className="h-10 w-5" />
                  </div>
                </div>
              </div>

              {/* 2 - box */}
              <div className="h-auto bg-gray-100 p-4 rounded-xl">
                <h2 className="font-medium text-xl mb-6">Activity Feed</h2>
                <div className="flex mb-4 px-4">
                  <div>
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-6.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full mr-4"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium mb-2">Dianna Smiley</h2>
                    <p className="text-[#637381] mb-2">
                      Just create a new Project in Dashui...
                    </p>
                    <p className="text-[#637381]">2m ago</p>
                  </div>
                </div>
                <div className="flex mb-4 px-4">
                  <div>
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-7.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full mr-4"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium mb-2">Irene Hargrove</h2>
                    <p className="text-[#637381] mb-2">
                      Comment on Bootstrap Tutorial Says Hi, I m irene...
                    </p>
                    <p className="text-[#637381]">1 hour ago</p>
                  </div>
                </div>
                <div className="flex mb-4 px-4">
                  <div>
                    <img
                      src="https://dash-ui-admin-template.vercel.app/images/avatar/avatar-9.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full mr-4"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium mb-2">Trevor Bradley</h2>
                    <p className="text-[#637381] mb-2">
                      Just share your article on Social Media..
                    </p>
                    <p className="text-[#637381]">2 month ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
