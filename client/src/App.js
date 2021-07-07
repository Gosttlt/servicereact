import './App.css';
import HeaderTopBlockContainer from 'components/header/headerTopBlock/headerTopBlockContainer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'components/header/navBar';
import Search from 'components/header/search';
import Footer from 'components/footer';
import AppRouter from 'components/appRouter';




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <HeaderTopBlockContainer />
          <Navbar />
          <Search />
        </header>
        <div className="main">
          <AppRouter />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
