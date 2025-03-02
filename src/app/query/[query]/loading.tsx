import { SkeletonItem2 } from "@/components/skeletons/item-skeleton";

export default function Loading() {
  return (
    <ul className="flex items-center relative z-10 justify-center h-auto flex-col">
      {Array.from({ length: 12 }, (_, i) => (
        <li key={i}>
          <SkeletonItem2 />
        </li>
      ))}
    </ul>
  );
}


