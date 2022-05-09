import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import {Route,Routes} from "react-router-dom"
import {Home} from "./pages/index"
import {VideoListing} from "./pages/index"
import {Signup} from "./pages/index"
import {Login} from "./pages/index"
import MockMan from "mockman-js";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videolisting" element={<VideoListing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mock" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
