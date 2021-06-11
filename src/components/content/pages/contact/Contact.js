import './contact.css'

function Contact(){
  return (
    <section className="contact">
    <div className="left-column">
    <h1>
      Contacto
    </h1>
    <div className="description">
    <p>
      Ofrecemos soporte técnico para proyectos creativos y soporte creativo para proyectos técnicos.
    </p>
    <p>
      ¿Quieres saber más sobre Shamans Garage? <br/>¿Buscas ayuda para desarrollar tu proyecto?
    </p>

    <p className="link-title">No dudes en escribirnos a</p>
    <p className="mail"><a href="mailto:contact@shamansgarage.com">contact@shamansgarage.com</a></p>

    <p className="link-title"> También puedes encontrarnos en:</p>
      <p className="link"><a href="" target="__blank"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></p>
      <p className="link"><a href="" target="__blank"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></p>
      <p className="link"><a href="" target="__blank"><i className="fa fa-twitch" aria-hidden="true"></i> Twitch</a></p>
      <br/><p className="link"><a href="" target="__blank"><i className="fa fa-youtube-play" aria-hidden="true"></i> YouTube</a></p>
      <p className="link"><a href="" target="__blank"><i className="fa fa-discord" aria-hidden="true"></i> Discord</a></p>
      <p className="link"><a href="" target="__blank"><i className="fa fa-github" aria-hidden="true"></i> Github</a></p>

    </div>
    </div>
    <div className="right-column">


    </div>
    </section>
  );
}


export default Contact;
