import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
