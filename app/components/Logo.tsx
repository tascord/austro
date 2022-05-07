import { ActionIcon } from "@mantine/core"
import { Link } from "@remix-run/react"
import { Rocket } from "tabler-icons-react"

export default function Logo() {
    return (
        <h1>🚀 Austro</h1>
    )
}

export function SmallLogo() {
    return (
        <Link to="/dashboard">
            <ActionIcon
                variant="light"
                color="grape"
                size="xl"
                radius="xl">
                <Rocket size={32} />
            </ActionIcon>
        </Link>
    )
}