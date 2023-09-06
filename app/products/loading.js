import { Card } from "@tremor/react";

function Loading() {
    return (
        <>
            <div className="flex flex-col items-center gap-2 mt-10">
                <Card className="animate-pulse max-w-xl self-center h-60"></Card>
                <Card className="animate-pulse max-w-xl self-center h-60"></Card>
                <Card className="animate-pulse max-w-xl self-center h-60"></Card>
            </div>
        </>
    );
}
export default Loading;
