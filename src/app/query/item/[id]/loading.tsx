export default function Loading() {
  return (
    <div className="h-screen flex  bg-graymercado items-center justify-center">
      <div className="w-[1000px] h-svh rounded-md mt-12 flex flex-row bg-whitemercado gap-6 py-12 p-8">
        <div className="h-[300px] w-96 bg-zinc-200 rounded-md animate-pulse"></div>
        <div className="bg-zinc-200 rounded-md w-full animate-pulse">
          <div className=""></div>
        </div>
        <div className="w-80 bg-zinc-200 rounded-md h-2/4"></div>
      </div>
    </div>
  );
}
