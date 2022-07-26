import logo from "./logo.svg";
import style from "./App.module.scss";
import Heading from "./containers/Heading/Heading";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./containers/BookList/BookList";
import { useState, useEffect } from "react";

function App() {
    const handleDisplay = (searchInput) => {
        setSearch(searchInput);
    };

    const [search, setSearch] = useState("");

    return (
        <section className={style.App}>
            <header>
                <Heading />
                <nav>
                    <SearchBar searchFunc={handleDisplay} />
                </nav>
            </header>
            <main>
                <BookList searchInput={search} />
            </main>
        </section>
    );
}

export default App;
