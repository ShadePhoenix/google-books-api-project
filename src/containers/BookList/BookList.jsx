import BookCard from "../../components/BookCard/BookCard";
import style from "./BookList.module.scss";
import { getBookList } from "../../services";
import { useEffect, useState } from "react";

const BookList = (props) => {
    const searchInput = props.searchInput;
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchInput === "") return;
        getBookList(searchInput).then((books) => setSearchResults(books));
    }, [searchInput]);

    const [showBook, setShowBook] = useState(false);
    const [bookPopup, setBookPopup] = useState(null);

    const showPopup = (show, book = null) => {
        setShowBook(show);
        setBookPopup(book);
        console.log("after", showBook, bookPopup);
    };

    return (
        <article>
            <header>
                {searchResults.length > 0 && <h2>Search Results</h2>}
            </header>

            {showBook && (
                <BookCard
                    key="popup"
                    title={bookPopup.title}
                    authors={bookPopup.authors || ""}
                    description={bookPopup.description}
                    imageLinks={bookPopup.imageLinks}
                    showPopup={showPopup}
                    isPopup={true}
                />
            )}
            <main className={style.BookList__grid}>
                {searchResults.length > 0 &&
                    searchResults.reduce((acc, curr, i) => {
                        acc.push(
                            <BookCard
                                key={i}
                                title={curr.title}
                                authors={curr.authors || ""}
                                description={curr.description}
                                imageLinks={curr.imageLinks}
                                showPopup={showPopup}
                                isPopup={false}
                            />
                        );
                        return acc;
                    }, [])}
            </main>
        </article>
    );
};

export default BookList;
