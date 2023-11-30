import Sidebar from 'src/components/Sidebar/Sidebar'

const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      <Sidebar children={children} />
    </>
  )
}

export default AuthenticatedLayout
