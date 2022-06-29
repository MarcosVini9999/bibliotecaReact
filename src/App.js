import {useEffect, useState} from "react";
import api from "./services/shared/api";
import List from "./components/list/index";
import SearchBar from "./components/searchBar/index";
import "./App.css";

function App() {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await api.get("/search?query=");
      console.log(result.date);
    };
    getData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}

export default App;
