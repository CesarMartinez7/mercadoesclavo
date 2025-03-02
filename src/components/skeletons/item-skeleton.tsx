
export default function SkeletonItem1() {
  return ( 
    <li className="border  z-0 w-[200px] grid grid-rows-2 gap-2 rounded-md p-2">
      <div className="rounded-md bg-zinc-200 h-[100px] w-full animate-pulse "></div>
      <div className="h-full flex flex-col gap-3 px-2">
        <div className="rounded-md w-full h-[14px] bg-zinc-200 animate-pulse"></div>
        <div className="rounded-md w-full h-[14px] bg-zinc-200 animate-pulse"></div>
        <div className="rounded-md w-2/4 h-[14px] bg-zinc-200 animate-pulse"></div>
      </div>
    </li>
  );
}

export function SkeletonItem2() {
  return (
    <li className="border  grid grid-cols-2 gap-2 rounded-md p- w-[900px] h-40 z-10 p-4">
      <div className="rounded-md bg-zinc-200 h-full w-full animate-pulse "></div>
      <div className="h-full flex flex-col gap-3 px-5 py-5 ">
        <div className="rounded-md w-full h-[14px] bg-zinc-200 animate-pulse"></div>
        <div className="rounded-md w-full h-[14px] bg-zinc-200 animate-pulse"></div>
        <div className="rounded-md w-2/4 h-[14px] bg-zinc-200 animate-pulse"></div>
      </div>
    </li>
  );
}

