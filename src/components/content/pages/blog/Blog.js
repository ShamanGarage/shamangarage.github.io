import './blog.css'

function Blog(){
  return (
    <section className="blog">
    <div className="left-column">
    <h1>
      Blog
    </h1>
    <div className="description">
    <p>
      Acércate a la cultura y la técnología con los <span className="bold">artículos de opinión</span>, <span className="bold">tutoriales</span> y <span className="bold">diarios de desarrollo</span> que publicamos periodicamente en nuestro blog.
    </p>
    <a className="button-big" href="https://shamansgarage.com/blog">

    <div className="button-inner">
      <p>→</p>

    </div>
        </a>
    </div>
    </div>
    <div className="right-column">


    </div>
    </section>
  );
}


export default Blog;
