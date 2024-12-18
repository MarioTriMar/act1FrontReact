import {Footer} from "./components/Footer";
import {GlobalRouter} from "./routes/GlobalRouter";
import {useBooks} from "./hooks/useBooks";
import {BookContext} from "./context/BookContext";

export const App = () => {
    const books = useBooks();
    return (
        <div className="body-app">
            <BookContext.Provider value={{ books }}>
                <GlobalRouter></GlobalRouter>
                <Footer />
            </BookContext.Provider>
        </div>
    );
}

