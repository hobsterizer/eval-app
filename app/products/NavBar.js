"use client";
import { useRouter } from "next/navigation";
import { Card, Button, Title } from "@tremor/react";
const NavBar = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center">
            <Card className="flex flex-row justify-between w-11/12 mt-8">
                <Title className="self-center">Products</Title>
                <Button
                    color="indigo"
                    size="md"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Logout
                </Button>
            </Card>
        </div>
    );
};
export default NavBar;
