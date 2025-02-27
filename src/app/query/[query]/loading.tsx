import { SkeletonItem2 } from "@/components/skeletons/item-skeleton";

export default function Loading() {
  return (
    <ul className="flex z-10 items-center justify-center h-screen flex-col">
      {Array.from({ length: 12 }, (_, i) => (
        <li key={i}>
          <SkeletonItem2 />
        </li>
      ))}
    </ul>
  );
}


