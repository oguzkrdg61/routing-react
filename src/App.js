import "./App.css";
import logo from "./images/react.png";
import Hakkimizda from "./components/hakkimizda.jsx";
import Iletisim from "./components/iletisim.jsx";
import Urunler from "./components/urunler.jsx";
import Anasayfa from "./components/anasayfa.jsx";
import { Link, Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <div classname="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img classname="logo" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hakkimizda">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/urunler">
                  Ürünler
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iletisim">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <div className="row">
          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/urunler" element={<Urunler />} />
          </Routes>
          <div className="col-md-12">
            <div class="alert alert-warning" role="alert">
              <Routes>
                <Route path="/:id" element={<Child />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>ID:{id}</h3>
    </div>
  );
}
