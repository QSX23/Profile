import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/mainPage'
import Navigation from './components/navbar'
import { Outlet, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<LayoutsWithNavbar />}>
          <Route path = '/' element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


  function LayoutsWithNavbar() {
    return (
      <>
        <Navigation />
        <Outlet /> 
      </>
    );
  }
