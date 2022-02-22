import React from 'react';
import SigninMolecule from '../components/molecule/SigninMolecule';
import AuthForm from '../components/organisms/AuthForm';

export default function AdminLogin() {
  return (
    <AuthForm>
      <SigninMolecule header={'Admin login'} usernamelabel={'username'} />
    </AuthForm>
  );
}
