import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const NavbarHome = () => {
  const { isAuthenticated, logOut, currentUser } = useAuth()
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={routes.home()}>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0  hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:flex sm:pr-0">
                {isAuthenticated ? (
                  <>
                    <Link
                      className={classNames(
                        'block px-4 py-2 text-sm text-gray-300'
                      )}
                      to={routes.home()}
                    >
                      Home
                    </Link>
                    <button
                      type="button"
                      onClick={logOut}
                      className={classNames(
                        'block px-4 py-2 text-sm text-gray-300'
                      )}
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className={classNames(
                        'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white '
                      )}
                      to={routes.login()}
                    >
                      Sign in
                    </Link>
                    <Link
                      className={classNames(
                        'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white '
                      )}
                      to={routes.signup()}
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={logOut}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  Signout
                </button>
              ) : (
                <>
                  <Link
                    to={routes.login()}
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    Sign in
                  </Link>
                  <Link
                    to={routes.signup()}
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavbarHome