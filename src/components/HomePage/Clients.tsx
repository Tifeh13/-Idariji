const Clients = () => {
  const client = [
    "logo",
    "logo1",
    "logo2",
    "logo3",
    "logo4",
    "logo5",
    "logo6",
    "logo7",
  ];
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex justify-center items-center flex-col w-[90%] py-8">
        <aside>
            <p className="font-medium md:tracking-[.45em]">Our Happy Clients</p>
        </aside>
        <aside className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 justify-center items-center gap-6 mt-4">
          {client.map((item, i) => (
            <div key={i}>
              <img src={`/svg/${item}.svg`} alt="client logo" />
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default Clients;
