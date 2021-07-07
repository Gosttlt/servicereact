import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/footer';
import AppRouter from 'components/appRouter';
import Header from 'components/header';




function App() {

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
