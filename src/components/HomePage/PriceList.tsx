import { TabKey } from "../../utils/Types";
import { tabContent } from "../../utils/Data";
import { useAppContext } from "../ContextApi/ContextApi";

const PriceList = () => {
  const { tabState, setTabState } = useAppContext();
  const tabs: TabKey[] = ["Merry Set", "Yelutide Treasure Trove"];

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex justify-center items-center flex-col w-[90%] my-8">
        <aside className="inline-flex justify-center items-center gap-4 lmd:gap-2 bg-[#F3F4FF] px-2 py-2 rounded-md">
          {tabs?.map((tab, i) => (
            <div
              key={i}
              className={`${
                tab === tabState ? "bg-[#2E3192] text-white" : "text-[#2E3192]"
              } px-6 lsm:px-2 py-2 rounded-md cursor-pointer`}
              onClick={() => setTabState?.(tab)}
            >
              <p className="lsm:text-xs">{tab}</p>
            </div>
          ))}
        </aside>
        <aside className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mt-8">
          {tabContent[tabState!]?.map((item: any, i: number) => (
            <a
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              href={
                tabState === "Merry Set"
                  ? "https://dashboard.membersstack.com/public/payment/9d8d8425-d312-4283-87c8-0578b490a6bd"
                  : "https://dashboard.membersstack.com/public/payment/9d8d8a32-a836-4751-b8ab-8de24e2df8f1"
              }
            >
              <main
                className={`flex justify-center items-center rounded-2xl ${
                  item.bgCardColor
                } py-4 ${
                  i < 2
                    ? 'bg-[url("/svg/jci.svg")]'
                    : 'bg-[url("/svg/tie.svg")]'
                } bg-center bg-cover`}
              >
                <div className="w-[90%]">
                  <span
                    className={`${item.bgColor} ${item.textColor} rounded-full py-1 px-2 text-xs`}
                  >
                    {item.type}
                  </span>
                  <h1 className={`${item.textColor} text-xl font-medium py-4`}>
                    {item.package}
                  </h1>
                  <main className="grid lg:grid-cols-2 lg:gap-4">
                    {/* Display the first five items normally */}
                    <div>
                      {item.benefits
                        ?.slice(0, 5)
                        .map((benefit: string, i: number) => (
                          <div
                            key={i}
                            className="mb-4 flex justify-start items-center gap-2"
                          >
                            <div
                              className={`flex justify-center items-center size-[20px] rounded-full ${item.bgColor}`}
                            >
                              <i
                                className={`fa-solid fa-check ${item.textColor}`}
                              ></i>
                            </div>
                            <p className="text-[#525866] text-sm">{benefit}</p>
                          </div>
                        ))}
                    </div>

                    {/* Flex the rest of the items to the side */}
                    {item.benefits && item.benefits.length > 5 && (
                      <div className="flex flex-col">
                        {item.benefits
                          .slice(5)
                          .map((benefit: string, i: number) => (
                            <div
                              key={i + 5} // Adjust key to avoid duplication
                              className="mb-4 flex justify-start items-center gap-2"
                            >
                              <div
                                className={`flex justify-center items-center size-[20px] rounded-full ${item.bgColor}`}
                              >
                                <i
                                  className={`fa-solid fa-check ${item.textColor}`}
                                ></i>
                              </div>
                              <p className="text-[#525866] text-sm">
                                {benefit}
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                  </main>
                  <div
                    className={`w-full flex justify-center items-center py-2 px-4 border ${item.borderColor} rounded-md mt-8 cursor-pointer `}
                  >
                    {/* Full price for desktop */}
                    <p className={`${item.textColor} hidden sm:block`}>
                      {item.price}
                    </p>
                    {/* Only numerical price for mobile */}
                    <p className={`${item.textColor} sm:hidden`}>
                      {item.price.match(/\(([^)]+)\)/)?.[1]}{" "}
                      {/* Extracts text within brackets */}
                    </p>
                  </div>
                </div>
              </main>
            </a>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default PriceList;
