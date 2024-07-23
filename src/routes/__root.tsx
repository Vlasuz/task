import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="py-4 flex">
        <Link to="/" className="[&.active]:font-bold border-r border-gray-300 last:border-none px-4"> Главная </Link>
        <Link to="/signup" className="[&.active]:font-bold border-r border-gray-300 last:border-none px-4"> Sign Up </Link>
        <Link to="/signin" className="[&.active]:font-bold border-r border-gray-300 last:border-none px-4"> Sign In </Link>
      </div>
      <hr className='mb-10' />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
