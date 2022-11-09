import {useLocation} from 'react-router-dom';
import {NavLink} from "react-router-dom";


function Main() {
  let url = useLocation();
  console.log(url);
  return (
<>
  <h1>Main</h1>
  <ul>
    <li><NavLink to={`${url.pathname}ivanov`}>Ivanon</NavLink></li>
    <li><NavLink to={`${url.pathname}petrov`}>Petrov</NavLink></li>
  </ul>
  </>
  );
}

export default Main;


