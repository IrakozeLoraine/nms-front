import './App.css';
import Signup from './views/Signup';
import { Route, Routes } from 'react-router-dom';
import Signin from './views/Signin';
import AdminLogin from './views/AdminLogin';
import Home from './views/Home';
import PopupAtom from './components/atoms/PopupAtom';
import Note from './views/Note';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/notes" element={<Note />} />
        <Route
          path="/dashboard/popup"
          element={<PopupAtom open={true}>Welcome</PopupAtom>}
        />
      </Routes>
    </>
  );
}

export default App;
