"use client";
import { TextInput, Card, Button, Metric } from "@tremor/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserIcon, LockClosedIcon } from "@heroicons/react/solid";
function Login() {
    const router = useRouter();
    const [formIsValid, setFormIsValid] = useState(false);
    const [email, setEmail] = useState({
        value: "",
        isValid: null,
    });
    const [password, setPassword] = useState({
        value: "",
        isValid: null,
    });

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(email.isValid && password.isValid);
        }, 500);
        return () => {
            clearTimeout(identifier);
        };
    }, [email.isValid, password.isValid]);

    const emailChangeHandler = (event) => {
        setEmail({
            value: event.target.value,
            isValid: RegExp(
                /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
            ).test(event.target.value),
        });
    };

    const passwordChangeHandler = (event) => {
        setPassword({
            value: event.target.value,
            isValid: event.target.value.trim().length >= 8,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        router.replace("/products");
    };
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Card
                className="max-w-sm mx-auto"
                decoration="bottom"
                decorationColor="indigo"
            >
                <form className="flex flex-col" onSubmit={submitHandler}>
                    <Metric className="self-center">Login</Metric>
                    {email.isValid !== false ? (
                        <TextInput
                            icon={UserIcon}
                            className="mt-5"
                            type="text"
                            id="email"
                            value={email.value}
                            placeholder="Username..."
                            onChange={emailChangeHandler}
                        />
                    ) : (
                        <TextInput
                            icon={UserIcon}
                            className="mt-5"
                            type="text"
                            id="email"
                            value={email.value}
                            placeholder="Username..."
                            onChange={emailChangeHandler}
                            error={true}
                            errorMessage="invalid email"
                        />
                    )}
                    {password.isValid !== false ? (
                        <TextInput
                            icon={LockClosedIcon}
                            className="mt-5"
                            type="password"
                            id="password"
                            value={password.value}
                            placeholder="Password..."
                            onChange={passwordChangeHandler}
                        />
                    ) : (
                        <TextInput
                            icon={LockClosedIcon}
                            className="mt-5"
                            type="password"
                            id="password"
                            value={password.value}
                            placeholder="Password..."
                            onChange={passwordChangeHandler}
                            error={true}
                            errorMessage="password must be at least 8 characters"
                        />
                    )}

                    <Button
                        className="w-1/4 self-center mt-5"
                        color="indigo"
                        size="lg"
                        disabled={!formIsValid}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
}
export default Login;
