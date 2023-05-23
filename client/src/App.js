import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import LoginForm from './containers/LoginForm';
import SignUpForm from './containers/SignUpForm';
import SearchForBooks from './components/SearchForBook';
import SelectedBookDetails from './containers/SelectedSearchBookDetails';
import ReaderDetails from './containers/ReaderDetails';
import ReaderBookDetails from './containers/ReaderBookDetails';
import RecommendedBookDetails from './containers/RecommendedBookDetails';

const App = () => {
  return (
    <>
      <Container fluid>
        <NavBar />
      </Container>
      <br />
      <Container className="md-4 mt-5">
        <Routes> 
          <Route exact path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/search' element={<SearchForBooks />} />
          <Route path='/book/:identifier' element={<SelectedBookDetails />} />
          <Route path='/readers/:readerId' element={<ReaderDetails />} />
          <Route path='/readers/:readerId/book/:identifier' element={<ReaderBookDetails />} />
          <Route path='/readers/:readerId/recommendedbook/:identifier' element={<RecommendedBookDetails />} />
        </Routes>  
      </Container>
    </>
  );
}

export default App;