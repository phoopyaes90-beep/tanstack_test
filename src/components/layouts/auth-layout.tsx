import { Outlet } from "@tanstack/react-router"
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import AppSidebar from "./app-sidebar"

const AuthLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                  <SidebarTrigger />
                 <Outlet />
            </main>
        </SidebarProvider>
    )
}

export default AuthLayout