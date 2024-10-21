import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<h1>Product listing Component</h1>}></Route>
      <Route path="/add" element={<h1>Add Component</h1>}></Route>
      <Route path="/update" element={<h1>Upadte  Component</h1>}></Route>
      <Route path="/logout" element={<h1>logout Component</h1>}></Route>
      <Route path="/profile" element={<h1>profile Component</h1>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
     </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
