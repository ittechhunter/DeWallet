import DashboardModal from "../Modal/DashboardModal";
import { Section } from "../Util";
import { Flex } from "../List/Utils";
import Loader from "./Loader";

function PriceSectionSkeleton() {
    return <Section styles="!py-8  text-center">
        <Loader styles="w-[50%] h-8 mx-auto mb-3" />
        <Loader styles="w-[30%] h-4 mx-auto" />
    </Section>
}

function ButtonGridSkeleting() {
    return <div className="flex px-2 gap-2">
        <Loader styles="flex-1 h-12" />
        <Loader styles="flex-1 h-12" />
        <Loader styles="w-20 h-12" />
    </div>
}

function ListSkeleton() {
    return <div className="flex">
        <Loader styles="h-10 aspect-square mr-2 !rounded-full" />
        <div className="w-full my-auto">
            <Flex>
                <Loader styles="w-[40%] h-5" />
                <Loader styles="w-[25%] h-5" />
            </Flex>
            <Flex styles="mt-1">
                <Loader styles="w-[30%] h-4" />
                <Loader styles="w-[15%] h-4" />
            </Flex>
        </div>
    </div>
}

function PanelSkeleton() {
    return <div className="px-2 py-3">
        <Loader styles="h-8 my-3 !rounded-lg" />
        <div className="w-full grid gap-3 py-2">
            <ListSkeleton />
            <ListSkeleton />
            <ListSkeleton />
        </div>
    </div>
}

export default function DashboardSkeleton() {
    return <DashboardModal styles="bg-white">
        <PriceSectionSkeleton />
        <ButtonGridSkeleting />
        <PanelSkeleton />
    </DashboardModal>
}