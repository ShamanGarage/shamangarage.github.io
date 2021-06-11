import { Link } from "react-router-dom";
import './header-logo.css'
function HeaderLogo(){

  function rotateLogo(){
    const cube = document.querySelector(".cube");
    if(!cube.classList.contains("rotate")){
      cube.classList.add("rotate");
      setTimeout(function(){ cube.classList.remove("rotate"); }, 1000);
    }
  }

  return(
    <Link to="/" onClick={rotateLogo}>
    <div className="scene">

      <div className="cube skew">
<div className="sphere"></div>
  <div className="cube__face cube__face--front"></div>
  <div className="cube__face cube__face--back"></div>
  <div className="cube__face cube__face--right"></div>
  <div className="cube__face cube__face--left"></div>
  <div className="cube__face cube__face--top"></div>
  <div className="cube__face cube__face--bottom"></div>
</div>
</div>
</Link>

  );
}

export default HeaderLogo;
