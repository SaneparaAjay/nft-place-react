import './App.css';
import Home from './app/home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../src/style/global.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './shared/common/footer';
import Header from './shared/common/header';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
