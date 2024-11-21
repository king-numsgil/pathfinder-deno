import { AppShell, Group, Container, Text, rem } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";

// @ts-types="@types/react"
import type { FC, PropsWithChildren } from "react";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    const pinned = useHeadroom({ fixedAt: 120 });

    return (
        <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} p="md">
            <AppShell.Header>
                <Group h="100%" mx="xl" px="md" justify="space-between">
                    <Text
                        size="xl"
                        fw="bold"
                        ff="monospace"
                    >
                        Numsgil Co
                    </Text>
                    <Text>Menu goes here</Text>
                    <Text>User stuff</Text>
                </Group>
            </AppShell.Header>

            <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
                <Container fluid>
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    );
};
