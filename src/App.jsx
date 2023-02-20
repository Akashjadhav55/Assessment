// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar/navbar';
import Componentone from "./Component/Componentone"
import ComponentTwo from './Component/Component2/ComponentTwo';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Componentone/>
      <ComponentTwo/>
      <Footer/>
    </div>
  );
}

export default App;
