import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/footer';
import AppRouter from 'components/appRouter';
import Header from 'components/header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from 'store/authReducer/actions';




function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(data);
    if (data && data.token) {
      dispatch(setLogin(data))
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
          <AppRouter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
