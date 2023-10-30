import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

//buat 3 hlmn
//npm i react-router-dom
//import browserrouter as Router
//masukan Router di App utk menaungi semua

//LATIHAN
//1
//buat halaman home, dashboard
//klik dashboard, menampilkan tombol mengarah ke detail
//di details terdapat list dan tombol mengarah kembali ke dashboard

//2
//tampilkan user dari params url
// misal : localhost/user/mukti maka muncul <h1>mukti

//3
//Fetching data
//npm i axios
//di ListUser memakai fetching data dari URL dan berbentuk json
// lalu filter hanya nama dan email
//lalu return tampilkan di halaman <div>

//4
//latihan upload apke axios
//buat app backend sederhana isinya app.post /upload
//di file ./Simplebackend lalu run di local/8000
//lalu di React buat fungsi Upload untuk input file
//lalu button untuk post file ke local/8000/upload

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Upload() {
  //membuat state
  const [file, setFile] = useState(null);

  return (
    <div>
      <h1>latihan Upload :</h1>
      <input
        type="file"
        onChange={(e) => {
          //file dimasukan ke setFile 
          setFile(e.target.files[0]);
        }}
      />
      <button
        onClick={async () => {
          if (!file) {
            window.alert("please select");
            return;
          }
          //file dimasukan ke formData
          const formData = new FormData();
          formData.append("file", file);
          try {
            const res = await axios.post(
              "http://localhost:8000/upload",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log("res", res);
            window.alert("upload succes");
          } catch (error) {
            console.error("Error:", error); // Menampilkan error ke konsol
            window.alert("Upload failed");
          }
        }}
      >
        Upload
      </button>
    </div>
  );
}

function ListUser() {
  const [data, setData] = useState([]);

  //hampir mirip CRUD dari API BACKEND
  //namun ini menggunakan url bukan database
  //url yang dipake disini menggunakan fake api fake url yang sudah di run
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        window.alert("error");
      }
    }

    fetchData();
  }, []);

  console.log("data", data);

  return (
    <div>
      <h1>Test Fetching Data:</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

function User() {
  let { userId } = useParams();
  return (
    <div>
      <h1>User dari params : {userId}</h1>
    </div>
  );
}

function DashboardDetails() {
  return (
    <div>
      <ul>
        <li>
          <a href="/dashboard/"> klik ini utk kmbli ke Dashboard</a>
        </li>
        <li>detail 1</li>
        <li>detail 2</li>
        <li>detail 3</li>
      </ul>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <p>WELCOME TO Dashboard</p>
      <ul>
        <li>
          <a href="/dashboard/details"> klik ini utk ke Dashboard Details</a>
        </li>
      </ul>
    </div>
  );
}

function App8() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/listfetch">list fetch</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
          <li>
            <a href="/dashboard">dashboard</a>
          </li>
          <li>
            <a href="/upload">upload</a>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* contoh route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/details" element={<DashboardDetails />} />
        {/* contoh menggunakan params */}
        <Route path="/user/:userId" element={<User />} />
        <Route path="/listfetch" element={<ListUser />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App8;
