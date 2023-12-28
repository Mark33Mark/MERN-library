import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home, Book, About, SingleBook, CreateBook, EditBook, Footer } from "../components";

export const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/books" element={ <Book/> } />
          <Route path="/books/:slug" element={ <SingleBook/> } />
          <Route path="/createbook" element={ <CreateBook/> } />
          <Route path="/editbook/:slug" element={ <EditBook/> } />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
