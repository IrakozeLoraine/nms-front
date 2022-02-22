import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
import Form from '../atoms/Form';
import Input from '../atoms/Input';

export default function SigninMolecule({
  header,
  usernamelabel,
  showRegisterLink = false,
}: {
  header: string;
  usernamelabel: string;
  showRegisterLink?: boolean;
}) {
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
        <h2 className="text-xl uppercase pb-12 text-center text-txt-primary">
          {header}
        </h2>
        <Input
          inputname={'username'}
          label={usernamelabel}
          value={auth.username}
          handleChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
        />
        <Input
          type="password"
          inputname={'password'}
          label={'password'}
          value={auth.password}
          handleChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
        />
        <p className="flex justify-end items-end uppercase text-txt-primary pb-5">
          Forgot password?
        </p>
        <Checkbox
          isChecked={auth.remember}
          handleChange={(e) => handleChange(e)}
          inputname={'remember'}
          value={auth.remember}
          label={'Remember me'}
        />
        <div className="flex items-center justify-center pt-16">
          <Button>LOGIN</Button>
        </div>
        {showRegisterLink && (
          <p className="text-xs py-2 text-center text-txt-primary uppercase">
            don't have any account in our system?{' '}
            <a href="/register" className="text-primary hover:underline">
              REGISTER
            </a>
          </p>
        )}
      </Form>
    </>
  );
}
