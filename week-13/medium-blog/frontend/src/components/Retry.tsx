import Button from "./Button";

const Retry = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" bg-slate-100 p-10 rounded-xl">
        <div className="font-bold text-3xl">Something went Wrong!!!</div>
        <div className="flex justify-center font-bold text-xl mt-4">
          Please try after sometime
        </div>
        <div className="mt-6 flex justify-center">
          <Button label="RETRY" onclick={() => window.location.reload()} />
        </div>
      </div>
    </div>
  );
};

export default Retry;
