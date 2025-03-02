import SkeletonItem1 from "@/components/skeletons/item-skeleton";
import { SkeletonItem2 } from "@/components/skeletons/item-skeleton";
import Loading from "../query/item/[id]/loading";

export default function SkeletonPrueba(){
    return(
        <div>
            <Loading/>
            <SkeletonItem1/>
            <SkeletonItem2/>
        </div>
    )
}