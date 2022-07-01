import {useEffect, useState} from "react";
import api from "./services/shared/api";
import List from "./components/list/index";
import SearchBar from "./components/searchBar/index";
import SearchButton from "./components/searchButton/index";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [term, setTerm] = useState("");
  const fetchData = async()=>{
      try{
        const result = await api.get(`/search?query=${term}`);
        setList(result.data.hits);
      }catch{
        setList([]);
      }
    }
  return (
    <>
      <SearchBar searchTerm={term} setSearchTerm={setTerm}/>
      <SearchButton onButtonClick={fetchData}/>
      {list.length>0 ? <List list={list}/>: <h3>SEM RESULTADOS</h3>}
    </>
  );
}

export default App;
