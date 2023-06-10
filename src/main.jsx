import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MoviesProvider from './providers/MoviesProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MoviesProvider>
    <App />
  </MoviesProvider>
)
