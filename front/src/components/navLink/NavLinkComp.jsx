import { NavLink } from "react-router-dom";


function NavLinkComp({ to, children,...props }){
    return (
        <NavLink
            { ...props }
            to={to}
           
        >{children}</NavLink>
    )

}

export default NavLinkComp;