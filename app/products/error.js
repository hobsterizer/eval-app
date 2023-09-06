"use client";

import { Title } from "@tremor/react";
import { Card, Metric } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function Error() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/products");
        }, 3000);
    });
    return (
        <div className="flex flex-col items-center pt-10">
            <Card className="flex flex-col items-center gap-5 w-1/2">
                <Metric>404</Metric>
                <Metric>Page not found</Metric>
                <Title>you will be redirected shortly</Title>
            </Card>
        </div>
    );
}
export default Error;
