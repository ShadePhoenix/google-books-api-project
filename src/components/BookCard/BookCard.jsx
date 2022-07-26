import style from "./BookCard.module.scss";
import TextTruncate from "react-text-truncate";
import { createPortal } from "react-dom";

const BookCard = (props) => {
    const title = props.title;
    const authors = props.authors;
    const description = props.description;
    const imageLinks = props.imageLinks;
    const showPopup = props.showPopup;
    const isPopup = props.isPopup;

    const handleShowPopup = () => {
        showPopup(true, { title, authors, description, imageLinks });
    };

    const handleExitPopup = () => {
        showPopup(false);
    };

    if (isPopup) {
        return createPortal(
            <>
                <div
                    className={style.BookCardPopout__overlay}
                    onClick={handleExitPopup}
                />
                <article className={style.BookCardPopout}>
                    <button
                        className={style.BookCardPopout__btn}
                        onClick={handleExitPopup}
                    >
                        X
                    </button>
                    <section style={{ overflowY: "hidden" }}>
                        <img
                            className={style.BookCard__image}
                            src={imageLinks.thumbnail}
                            alt=""
                        />
                        <header>
                            <h3>{title}</h3>
                        </header>
                        <p>{authors && authors.join(", ")}</p>
                        <p>{description}</p>
                    </section>
                </article>
            </>,
            document.getElementById("popup")
        );
    }
    return (
        <article className={style.BookCard} onClick={handleShowPopup}>
            <img
                className={style.BookCard__image}
                src={imageLinks.thumbnail}
                alt=""
            />
            <header>
                <h3>{title}</h3>
            </header>
            <p>{authors && authors.join(", ")}</p>
            <TextTruncate
                line={2}
                element="p"
                truncateText="..."
                text={description}
                textTruncateChild={"Read More"}
            />
        </article>
    );
};

export default BookCard;
