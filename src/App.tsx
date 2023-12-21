import './App.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Hello world!</h1>
      <Link to={'./home'}>Home</Link>
      <Link to={'./about-us'}>About us</Link>
      <Link to={'./faq'}>FAQ</Link>
      <Link to={'./services'}>Services</Link>
      <Link to={'./contacts'}>Contacts</Link>
      <Outlet />
    </div>
  );
};
