import './App.css';
import PhotosList from "./components/PhotosList";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <>
        <Header />
        <div className="main">
          <div className="container">
            <PhotosList/>
          </div>
        </div>
        <Footer />
      </>
  );
}

export default App;
