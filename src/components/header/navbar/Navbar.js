import NavItem from './nav-item/NavItem'

function Navbar(){
  return (
    <div className="navbar">
        <NavItem route="/proyectos" text='<i class="fa fa-object-ungroup" aria-hidden="true"></i>'/>
        <NavItem route="/radio" text='<i class="fa fa-signal" aria-hidden="true"></i>'/>
        <NavItem route="/blog-info" text='<i class="fa fa-i-cursor" aria-hidden="true"></i>'/>
        <NavItem route="/contacto" text='<i class="fa fa-sticky-note-o" aria-hidden="true"></i>'/>
        <NavItem route="/¿" text='<i class="fa fa-map-o" aria-hidden="true"></i>'/>
    </div>
  );
}


export default Navbar;
