import { MdOutlineChat } from "react-icons/md";

const ChatUs = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex justify-center items-center w-[90%] bg-[#064083] rounded-2xl py-4">
        <div className="flex md:justify-between justify-center items-center lmd:flex-col w-[90%]">
          <aside>
            <h1 className="text-white lmd:text-center lmd:mb-6">You want to customize your own package yourself? Feel Free</h1>
          </aside>
          <aside>
            <a href="https://wa.link/0wnx3h" target="_blank" rel="noopener noreferrer" className="bg-white text-[#064083] px-6 py-1 rounded-md text-center"><MdOutlineChat className="inline-flex mr-2 font-medium" /> Chat US</a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ChatUs;
