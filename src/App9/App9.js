import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';

/* LOGIKA
dalam 1 halaman terdapat
tombol beranda untuk menampilkan beranda
dan tombol login untuk mendapat akses ke beranda
jika klik beranda tanpa login maka gagal kembali ke login
jika sudah login maka akan tampil beranda berisi konten
dan juga tombol logout untuk kembali ke login dan menghilangkan akses

//implementasi
menggunakan useState Auth untuk akses, bisa on off di App9
lalu function login untuk mengaktifkan Auth menjadi true lewat /login
saat menuju /dashboard
diarahkan ke PrivateRoute untuk pengecekan
apakah sudah login/ belum, jika sudah maka diarahkan ke children
children nya yaitu Dashboard yang terdapat tombol Logout

terdapat router yang tetap terdapat tombol : (/login,/dashboard)
dan routes, route yang berubah2/interaktif
*/

function PrivateRoute({ children, isAuthenticated }) {
  const navigate = useNavigate();
  //jika blm login >> ke login page
  if (!isAuthenticated) {
    navigate("/login");
    return <div>ga bisa, belum login!!</div>;
  }
  
  //jika sudah login >> ke children/dashboard
  return children;
}

//halaman login
function Login({ handleLogin }) {
    const [verifying, setVerifying] = useState(false);
  
    const handleLoginClick = () => {
      setVerifying(true);
  
      setTimeout(() => {
        setVerifying(false);
        handleLogin();
        window.alert('Login berhasil');
      }, 2000);
    }
  
    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={handleLoginClick}>KLIK ini utk Login</button>
        {verifying && <p>Memverifikasi....</p>}
      </div>
    );
}
  
//halaman dashboard
//handle logout karena ada button logoutnya
function Dashboard({ handleLogout }) { 
  return (
    <div>
        <br/>
      <h2>BERANDA (dashboard)</h2>
      <p>akhirnya bisa login,ini konten anda :</p>
      <p>privat content 1</p>
      <p>privat content 2</p>
      <p>privat content 3</p>
      <p>privat content 4</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

function App9() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  }
  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/login">LOGIN PAGE</Link></li>
          <li><Link to="/dashboard">BERANDA</Link></li>
        </ul>
        <div>
            <br/>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/dashboard" 
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Dashboard handleLogout={handleLogout} />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App9;
