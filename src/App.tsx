import Home from './pages/user/home';
import Footer from './widgets/footer/ui/footer';
import Header from './widgets/header/ui/header';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
