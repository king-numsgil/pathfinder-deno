import { AppShell, Burger, Container, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// @ts-types="@types/react"
import type { FC, PropsWithChildren } from "react";

import { NavbarLink } from "@/components/NavbarLink.tsx";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
            padding="md"
            withBorder={false}
        >
            <AppShell.Header>
                <Group h="100%" px="md" justify="space-between">
                    <Text
                        size="xl"
                        fw="bold"
                        ff="monospace"
                    >
                        Numsgil Co
                    </Text>
                    <Group>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <NavbarLink label="Home" to="/" />
            </AppShell.Navbar>

            <AppShell.Main>
                <Container fluid>
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    );
};