import Card from './card/Card'

function Projects(){
  return (
    <section className="projects">
    <div>
    <h1>
      Proyectos
    </h1>
    <div className="description">
    <p>Aquí encontrareís algunos de los proyectos en los que hemos estado <span className="bold">trabajando</span> y <span className="bold">colaborando</span>.</p>
    </div>
    <div className="card-pack">
      <Card
        imgUrl=""
        imgAlt=""
        title="DAvatar"
        description="Aplicación con la que podrás controlar tu avatar 2D personalizado. Solamente necesitarás de un micrófono. <br><br>Perfecto para videollamadas o streamings."
        link="https://github.com/ShamansGarage/DigitalAvatarProcessing"
        linkTitle="Pruébalo"/>
        <Card
          imgUrl=""
          imgAlt=""
          title="<span class='italic'>DEVILERY.net</span>"
          description="Colaboramos con el desarrollo del videojuego 'Devilery' diseñando y programando su página web.<br><br>Pronto podrás saber más del proceso del desarrollo en nuestro blog."
          link="https://devilery.net/"
          linkTitle="Visítala"/>
    </div>    </div>

    </section>
  );
}


export default Projects;
