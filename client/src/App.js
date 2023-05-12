import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import LoginForm from './containers/LoginForm';
import SignUpForm from './containers/SignUpForm';
import SearchForBooks from './components/SearchForBook';

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
        </Routes>  
      </Container>
    </>
  );
}

export default App;