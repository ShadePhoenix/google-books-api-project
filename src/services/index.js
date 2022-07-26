export const getBookList = async (input) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40`
    );

    const json = await response.json();
    const data = await json.items;
    const result = data.map((book) => {
        const info = book.volumeInfo;

        return {
            title: info.title,
            authors: info.authors,
            description: info.description,
            imageLinks: info.imageLinks ?? {
                thumbnail:
                    "https://sciendo.com/_next/image?url=%2Fproduct-not-found.png&w=1920&q=75"
            }
        };
    });
    return result;
};
