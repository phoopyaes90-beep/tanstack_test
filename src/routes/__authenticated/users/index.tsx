import UserPage from "@/pages/users";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/__authenticated/users/')({
    component: UserPage,
})