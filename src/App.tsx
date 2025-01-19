import { useEffect, useState } from 'react';
import './App.css'
import AppRoutes from './routes/AppRoutes';
import { useLocation } from 'react-router-dom';
import TopLoadingBar from './components/topLoadingBar/topLoadingBar';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 500); // Durasi simulasi loading
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <TopLoadingBar isLoading={isLoading} />
      <AppRoutes/>
    </>
  )
}

export default App
