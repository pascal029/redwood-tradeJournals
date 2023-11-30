import NavbarHome from "src/components/Navbar/Navbar"

const UnAuthenticatedLayout = ({ children }) => {
  return <>
  <NavbarHome />
  {children}</>
}

export default UnAuthenticatedLayout
