import AuthForm from '../components/organisms/AuthForm';
import SignupMolecule from '../components/molecule/SignupMolecule';

export default function Signup() {
  return (
    <AuthForm children={undefined}>
      <SignupMolecule />
    </AuthForm>
  );
}
