import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Group, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Icon as TablerIcon, Gauge, DeviceDesktopAnalytics, User, Logout, Sun, Moon } from 'tabler-icons-react';
import { Outlet } from '@remix-run/react';
import { SmallLogo } from '~/components/Logo';


interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" withArrow transitionDuration={0} my="xs">
            <UnstyledButton onClick={onClick}>
                <Icon size={24} />
            </UnstyledButton>
        </Tooltip>
    );
}

const icons = [
    { icon: Gauge, label: 'Practice' },
    { icon: DeviceDesktopAnalytics, label: 'Stats' },
    { icon: User, label: 'Account' },
];

export default function () {
    const [active, setActive] = useState(2);

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const links = icons.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <>
            <Navbar
                p="md"
                width={{ base: 80 }}
                style={{ height: 'calc(100vh - 16px)' }}>
                <Center>
                    <SmallLogo />
                </Center>
                <Navbar.Section grow mt={50}>
                    <Group direction="column" align="center" spacing={0}>
                        {links}
                    </Group>
                </Navbar.Section>
                <Navbar.Section>
                    <Group direction="column" align="center" spacing={0}>
                        <ActionIcon
                            variant="light"
                            size="xl"
                            radius="lg"
                            color={dark ? 'orange' : 'grape'}
                            onClick={() => toggleColorScheme()}>
                            {dark ? <Sun size={24} /> : <Moon size={24} />}
                        </ActionIcon>
                        <NavbarLink icon={Logout} label="Logout" />
                    </Group>
                </Navbar.Section>
            </Navbar>
            <main>
                <Outlet />
            </main>
        </>
    );
}