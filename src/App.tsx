import './App.css';
import Signup from './views/Signup';
import { Route, Routes } from 'react-router-dom';
import Signin from './views/Signin';
import AdminLogin from './views/AdminLogin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
