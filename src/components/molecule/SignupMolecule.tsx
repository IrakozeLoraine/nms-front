import React, { ChangeEventHandler, useState } from 'react';
import Button from '../atoms/Button';
import Form from '../atoms/Form';
import Input from '../atoms/Input';
import Select from '../atoms/Select';

export default function SignupMolecule() {
  const [auth, setAuth] = useState({
    firstname: '',
    lastname: '',
    username: '',
    category: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  function handleChange(e: ChangeEventHandler<HTMLInputElement>) {
    setAuth((auth) => ({
      ...auth,
      [e.target.name]: e.target.value,
    }));
  }

  console.log(auth);

  return (
    <>
      <Form>
        <h2 className="text-xl uppercase pb-12 text-center text-txt-primary">
          Sign up
        </h2>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <Input
            inputname={'firstname'}
            label={'firstname'}
            value={auth.firstname}
            handleChange={(e) => handleChange(e)}
          />
          <Input
            inputname={'lastname'}
            label={'lastname'}
            value={auth.lastname}
            handleChange={(e) => handleChange(e)}
          />
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <Input
            inputname={'username'}
            label={'username'}
            value={auth.username}
            handleChange={(e) => handleChange(e)}
          />
          <Select
            inputname={'category'}
            label={'category'}
            value={auth.category}
            handleChange={(e) => handleChange(e)}
            options={[
              { label: 'school', value: '1' },
              { label: 'school', value: '2' },
              { label: 'school', value: '3' },
            ]}
          />
        </div>
        <Input
          type="email"
          inputname={'email'}
          label={'email'}
          value={auth.email}
          handleChange={(e) => handleChange(e)}
        />
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <Input
            type="password"
            inputname={'password'}
            label={'password'}
            value={auth.password}
            handleChange={(e) => handleChange(e)}
          />
          <Input
            type="password"
            inputname={'confirmpassword'}
            label={'confirm password'}
            value={auth.confirmpassword}
            handleChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-center pt-16">
          <Button>REGISTER</Button>
        </div>
        <p className="text-xs py-2 text-center text-txt-primary uppercase">
          already created an account in our system?{' '}
          <a href="/" className="text-primary">
            LOGIN
          </a>
        </p>
      </Form>
    </>
  );
}
