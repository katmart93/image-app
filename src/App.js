import { useState, useEffect } from "react";

// components
import Hero from "./components/Hero";

// styles
import "./App.css";

function App() {
  const API_KEY = "29139017-65f3e73c8123a7a3bd76688ac";
  const [imager, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [inputVal, setInputVal] = useState("");

  // useEffect(() => {
  //   fetch(
  //     `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setImages(data.hits));
  // }, []);

  return (
    <div className="App">
      <Hero inputVal={inputVal} setInputVal={setInputVal} />
    </div>
  );
}

export default App;
