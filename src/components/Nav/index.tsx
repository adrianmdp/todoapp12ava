import { NavItem } from "./components"

const Nav = () => {

    return ( 
        <nav className="primary-nav">
          <NavItem text="Dashboard" options={[]} />
          <NavItem text="Login" options={[]} />
          <NavItem text="Contact" options={[]} />
          <NavItem text="Signup" options={[]} />
          <NavItem text="Services" options={[]} />
        </nav>
    )

}

export { Nav }