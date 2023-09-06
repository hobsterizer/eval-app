"use client";

import { Card, Button, Metric } from "@tremor/react";
import { useRouter } from "next/navigation";
function Loading() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center pt-10">
            <Card className="flex flex-col items-center gap-5 w-1/2">
                <Metric>This product is Currently unavailable</Metric>
                <Button
                    className="w-60 h-10 self-center"
                    color="indigo"
                    size="md"
                    onClick={() => {
                        router.push("/products");
                    }}
                >
                    Back
                </Button>
            </Card>
        </div>
    );
}
export default Loading;
