import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:svg-icons-register';
import App from './App';
import 'uno.css';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );

ReactDOM.createRoot(document.getElementById('root')!).render(
  // * react严格模式
  // <React.StrictMode>

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </React.StrictMode>
);
