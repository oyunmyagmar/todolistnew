const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center pt-15 font-sans">
      <div className="w-[377px] rounded-md py-6 px-4 bg-[#FFFFFF] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.16)] text-center box-border">
        <div className="w-[345px] ">
          <div className="flex flex-col gap-5">
            <h1 className="text-lg leading-7 font-semibold text-black">
              To-Do list
            </h1>
            <div className="flex gap-1.5">
              <input
                type="text"
                placeholder="Add a new task..."
                className="w-70 h-10 rounded-md border border-[#E4E4E7] py-2 px-4"
              ></input>
              <button>Add</button>
            </div>
            <div className="flex gap-1.5">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
          </div>

          <p className="mt-8 text-sm leading-[17px] text-[#6B7280]">
            No tasks yet. Add one above!
          </p>
        </div>

        <p className="mt-10 text-xs leading-[15px] text-[#6B7280]">
          Powered by{" "}
          <a className="text-[#3B73ED]" href="https://pinecone.mn/">
            Pinecone academy
          </a>
        </p>
      </div>
    </div>
  );
};
export default Home;
