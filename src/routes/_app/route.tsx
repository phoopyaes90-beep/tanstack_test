import Header from "@/components/layouts/header"
import { createFileRoute, Outlet } from "@tanstack/react-router"


export const Route = createFileRoute('/_app')({
    component: RouteComponent,
})

function RouteComponent(){
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}