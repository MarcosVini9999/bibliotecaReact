import { useEffect, useState } from "react";
import api from "./services/shared/api";
import List from "./components/list/index";
import SearchBar from "./components/searchBar/index";
import SearchButton from "./components/searchButton/index";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [term, setTerm] = useState("");
  const fetchData = async () => {
    try {
      const result = await api.get(`/search?query=${term}`);
      setList(result.data.hits);
    } catch {
      setList([]);
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="allBox">
        <h1 className="titlePage">BIBLIOTECA REACT</h1>
        <div className="searchBox">
          <SearchBar searchTerm={term} setSearchTerm={setTerm} />
          <SearchButton onButtonClick={fetchData} />
        </div>
        <div className="resultBox">
          {list.length > 0 ? <List list={list} /> : <h3>SEM RESULTADOS</h3>}
        </div>
        <footer className="footerbox">
          <h1>
            Desenvolvido por{" "}
            <a
              href="https://github.com/MarcosVini9999"
              target="_blank"
              rel="noreferrer"
            >
              Marcos Vinicius Andrade
            </a>
          </h1>
        </footer>
      </div>
    </>
  );
}

export default App;
