import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: Auth
})

function Auth() {
    return <div className='bg-blue-100 p-10 max-w-[600px] rounded-2xl mx-auto'>
        <Outlet/>
    </div>
}
