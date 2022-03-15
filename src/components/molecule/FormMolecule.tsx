import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../atoms/Button";
import Form from "../atoms/Form";
import Heading from "../atoms/Heading";
import Input from "../atoms/Input";

export default function FormMolecule() {
    const [auth, setAuth] = useState({
        username: '',
        password: '',
        remember: false,
    });
    function handleChange(e?: ChangeEvent<HTMLInputElement>) {
        if (e) {
            {
                setAuth((auth) => ({
                    ...auth,

                    [e?.target.name]: e?.target.value,
                }));
            }
        }
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(auth);
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Heading
                    fontSize="text-xl"
                    fontWeight="font-normal"
                    color="text-txt-primary"
                    className="pb-12 text-center uppercase"
                >
                    {Headers}
                </Heading>
                
                
                <div className="flex items-center justify-center pt-16">
                    <Button>LOGIN</Button>
                </div>
                
            </Form>
            </>
    )
}