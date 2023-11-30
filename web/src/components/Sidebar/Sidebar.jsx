import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

const Sidebar = ({children}) => {
  const { logOut } = useAuth()

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex min-h-screen flex-col">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          {children}
        </div>
        <div className="drawer-side">
          <div className="flex h-full flex-col items-center">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay m-5 text-3xl"
            >
              Trade Plans
            </label>
            <ul className="menu min-h-[80%] w-80 bg-base-200 p-4 text-base-content">
              <li>
                <Link to={routes.rules()}>Rules</Link>
              </li>
              <li>
                <Link to={routes.plans()}>Plans</Link>
              </li>
              <li>
                <Link to={routes.journals()}>Journals</Link>
              </li>
            </ul>
            <button onClick={logOut} className='mt-5 btn btn-md btn-neutral'>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
