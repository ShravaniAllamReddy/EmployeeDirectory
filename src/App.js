
import Navbar from "./components/Navbar";
import Search from './components/Search';


export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Search />
      </div>
    </div>

  );
}