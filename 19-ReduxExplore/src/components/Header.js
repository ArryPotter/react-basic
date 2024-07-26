import classes from './Header.module.css';
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();


  
  const loginHandler = (event) =>{
    event.preventDefault();
    dispatch(authAction.login())
  }

  const isAuth = useSelector(state=>state.auth.isAuthenticated);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
      }
      
    </header>
  );
};

export default Header;
