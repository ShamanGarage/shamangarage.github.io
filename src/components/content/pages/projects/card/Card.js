import './card.css'

import parse from "html-react-parser";

function Card(props){
  return(
    <div className="card-container">
    <div className="card">
      <img src={props.imgUrl} alt={props.imgAlt}/>
      <h3>{parse(props.title)}</h3>
      <p>{parse(props.description)}</p>
      <p className="link-container">
      <a href={props.link} target="__blank">{props.linkTitle} <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
      </p>
    </div>

    </div>

  );
}
export default Card
