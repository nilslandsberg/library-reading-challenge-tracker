import NonAuthView from '../components/NonAuthView';
import { useSelector } from 'react-redux';
import AuthHomePage from './AuthHomePage';

const HomePage = () => {
  const userIsLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);

  return (
    <>
    { userIsLoggedIn ? <AuthHomePage /> : <NonAuthView />  }
    </>
  )
}

export default HomePage 