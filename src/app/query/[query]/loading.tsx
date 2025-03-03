import { SkeletonItem2 } from "@/components/skeletons/item-skeleton";

export default function Loading() {
  return (
    <div className="flex flex-row rounded-md gap-4">
      <ul className="h-svh hidden md:flex w-56 bg-whitemercado p-5 gap-2 flex-col">
        {Array.from({length: 50},(_,i) => (
          <li key={i} className="w-full animate-pulse h-2 bg-graymercado rounded-md">
            
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-2 relative z-10 justify-center h-auto flex-col">
        {Array.from({ length: 12 }, (_, i) => (
          <li key={i}>
            <SkeletonItem2 />
          </li>
        ))}
      </ul>
    </div>
    );
}


