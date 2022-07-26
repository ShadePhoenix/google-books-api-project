import style from "./Heading.module.scss";
import image from "../../assets/images/open book_6045970.png";

const Heading = () => {
    return (
        <>
            <img
                src={image}
                height={300}
                width={300}
                alt="book clipart PNG Designed By CHENXIN from Pngtree.com"
            />
            <p>
                book clipart PNG Designed By CHENXIN from
                <a href="https://pngtree.com"> Pngtree.com</a>
            </p>
            <h1>Words on Paper Bound by Leather</h1>
            <small>
                Small project made by Daniel using the Google Books API.
            </small>
        </>
    );
};

export default Heading;
