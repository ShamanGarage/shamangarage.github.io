import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom'

import parse from "html-react-parser";

function NavItem(props){

  const location = useLocation().pathname;


  function rotateLogo(){
    const cube = document.querySelector(".cube");
    if(!cube.classList.contains("rotate") && location !== props.route){
      cube.classList.add("rotate");
      setTimeout(function(){ cube.classList.remove("rotate"); }, 1000);
    }
  }

return(
    <Link className="nav-item-link" to={props.route} onClick={rotateLogo}>
      <div className={location !== props.route? "nav-item": "nav-item active"}>
    {parse(props.text)}
</div>
    </Link>);
}


export default NavItem;
