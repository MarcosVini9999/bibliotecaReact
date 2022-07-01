import {useEffect, useState} from "react";
import api from "./services/shared/api";
import List from "./components/list/index";
import SearchBar from "./components/searchBar/index";
import SearchButton from "./components/searchButton/index";
import "./App.css";

function App() {
  const [list, setList] = useState("");
  const [term, setTerm] = useState("");
  const [btn, setbtn] = useState(false);
  
  useEffect(()=>{
    const fetchData = async()=>{
      const result = await api.get(`/search?query=${term}`);
      setList(result?.data?.hits);
    }
    console.log(list)
    fetchData();
  },[btn])
  return (
    <>
      <SearchBar searchTerm={term} setSearchTerm={setTerm}/>
      <SearchButton onButtonClick={()=>setbtn(btn=>!btn)}/>
    </>
  );
}

export default App;
