import { Container, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import LoginForm from './containers/LoginForm';
import SignUpForm from './containers/SignUpForm';
import SearchForBooks from './components/SearchForBook';
import SelectedBookDetails from './containers/bookSearch/SelectedSearchBookDetails';
import ReaderDetails from './containers/readerDetails/ReaderDetails';
import ReaderBookDetails from './containers/readerDetails/ReaderBookDetails';
import RecommendedBookDetails from './containers/recommendedBooks/RecommendedBookDetails';
import LibraryLogo from './components/LibraryLogo';


const App = () => {
  return (
    <>
      <Container fluid>
        <NavBar />
      </Container>
      <br />
      <Container className="md-4 pt-5">
        <Routes> 
          <Route exact path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/search' element={<SearchForBooks />} />
          <Route exact path='/book/:identifier' element={<SelectedBookDetails />} />
          <Route path='/readers/:readerId' element={<ReaderDetails />} />
          <Route exact path='/readers/:readerId/book/:identifier' element={<ReaderBookDetails />} />
          <Route exact path='/readers/:readerId/recommendedbook/:identifier' element={<RecommendedBookDetails />} />
        </Routes>  
        <LibraryLogo />
      </Container>
    </>
  );
}

export default App;