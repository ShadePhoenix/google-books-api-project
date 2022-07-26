import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./SearchBar.module.scss";

const SearchBar = (props) => {
    const searchFunc = props.searchFunc;

    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const term = event.target[0].value;
        searchFunc(term.split(" ").join("+"));
    };

    const onInputChange = (event) => {
        const filter = event.target.value;
        if (filter) {
            return setSearch(filter);
        }
        setSearch("");
    };

    return (
        <>
            <form id="searchForm" onSubmit={handleSubmit}>
                <label htmlFor="searchInput">Search:</label>
                <input
                    type="text"
                    name="searchInput"
                    id="searchInput"
                    placeholder="Search"
                    value={search}
                    onChange={onInputChange}
                />
                <input type="submit" />
            </form>
        </>
    );
};

export default SearchBar;
