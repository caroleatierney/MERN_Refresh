import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home       from "./routes/Home/home";
import About      from "./routes/About/about";
import AddNote    from "./routes/Home/add-note";
import UpdateNote from "./routes/Home/update-note";
import Header     from "./components/Header";
import Footer     from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/update-note/:id" element={<UpdateNote />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
