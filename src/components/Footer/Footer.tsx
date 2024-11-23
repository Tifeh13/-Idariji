import React from "react";

const Footer: React.FC = () => {
  const icons = [
    {
      name: "fa-facebook-f",
      linkTo: "",
    },
    {
      name: "fa-instagram",
      linkTo: "",
    },
    {
      name: "fa-linkedin-in",
      linkTo: "",
    },
    {
      name: "fa-x-twitter",
      linkTo: "",
    },
  ];
  return (
    <footer className="bg-white py-10 px-5 md:px-20">
      <div className="flex flex-wrap justify-between items-start gap-10">
      {/* NewsLetter Mobile */}
      {/* Newsletter */}
      <div className="w-full md:w-auto md:hidden">
          <div className="flex justify-center items-center flex-col gap-4">
            <div className="flex lmd:flex-col  gap-4">
              <input
                type="email"
                placeholder="email address"
                className="flex-grow px-4 py-2 border focus:outline-none"
              />
              <button className="bg-[#064083] text-white px-4 py-2">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2">
              {icons?.map(
                (item: { name: string; linkTo: string }, i: number) => (
                  <button
                    key={i}
                    className="bg-[#525866] first:bg-[#064083] hover:bg-gray-300 size-[30px]"
                  >
                    <i className={`fab ${item.name} text-white`}></i>
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Columns */}
        <div>
          <h3 className="text-[#064083] font-bold mb-4">Idariji</h3>
          <ul className="space-y-4 text-[#96A5AA]">
            <li>About</li>
            <li>Past Works</li>
            <li>Clients</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#064083] font-bold mb-4">Pages</h3>
          <ul className="space-y-4 text-[#96A5AA]">
            <li>Home</li>
            <li>Project</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#064083] font-bold mb-4">Support</h3>
          <ul className="space-y-4 text-[#96A5AA]">
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#064083] font-bold mb-4">Features</h3>
          <ul className="space-y-4 text-[#96A5AA]">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="w-full md:w-auto lmd:hidden">
          <h3 className="text-[#064083] font-bold mb-4">Newsletter</h3>
          <div className="flex flex-col gap-4">
            <div className="flex  gap-4">
              <input
                type="email"
                placeholder="email address"
                className="flex-grow px-4 py-2 border focus:outline-none"
              />
              <button className="bg-[#064083] text-white px-4 py-2">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2">
              {icons?.map(
                (item: { name: string; linkTo: string }, i: number) => (
                  <button
                    key={i}
                    className="bg-[#525866] first:bg-[#064083] hover:bg-gray-300 size-[30px]"
                  >
                    <i className={`fab ${item.name} text-white`}></i>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
