import React from 'react';
import SigninMolecule from '../components/molecule/SigninMolecule';
import AuthForm from '../components/organisms/AuthForm';

export default function Signin() {
  return (
    <AuthForm>
      <SigninMolecule
        header={'Sign in'}
        usernamelabel={'username / email'}
        showRegisterLink
      />
    </AuthForm>
  );
}
