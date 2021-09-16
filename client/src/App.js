import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/footer';
import AppRouter from 'components/appRouter';
import Header from 'components/header';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from 'store/authReducer/actions';
import Preloader from 'components/common/preloader'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const data = localStorage.getItem('userData')
    if (data) {
      dispatch(setLogin(JSON.parse(data)))
    }

  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
          <Suspense fallback={<Preloader />} >
            <AppRouter />
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
