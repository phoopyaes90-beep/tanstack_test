import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute('/_app/(auth)')({
    beforeLoad: ({context:{auth}}) => {
        const token = auth.token
        if(token) {
            throw redirect({ to: '/dashboard' })
            
        }
    },
    component: RouteComponent,
})
function RouteComponent() {
    return <Outlet />
}