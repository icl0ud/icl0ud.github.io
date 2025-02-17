import './App.css'
import { Home } from './best/Home'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', 'G-LRHYLQ8PD4', {
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <>
      <Home />
    </>
  )
}

export default App
