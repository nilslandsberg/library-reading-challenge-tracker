import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LoginForm from './containers/LoginForm';

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
        </Routes>  
      </Container>
    </>
  );
}

export default App;