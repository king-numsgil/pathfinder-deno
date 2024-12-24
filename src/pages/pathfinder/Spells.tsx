import { type DefaultError, type InfiniteData, type QueryKey, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { Badge, Card, Flex, Group, Loader, SimpleGrid, Text, Title } from "@mantine/core";
import { NavLink as RouterNavLink, Outlet } from "react-router-dom";
import { useInViewport } from "@mantine/hooks";

// @ts-types="@types/react"
import { type FC, Suspense } from "react";

import { spellFetcher, type SpellRequest, type SpellResult } from "@/client.tsx";
import { useLazyEffect } from "@/hooks/lazyEffect.ts";

type SpellPageProps = {
    spells: SpellResult["items"];
};

const SpellPage: FC<SpellPageProps> = ({ spells }) => {
    return (
        <SimpleGrid mt="md" cols={{ base: 1, md: 2, lg: 3 }}>
            {spells.map((spell) => (
                <Card
                    key={spell.id}
                    renderRoot={({ className, ...others }) => (
                        <RouterNavLink
                            className={({ isActive }) => className + (isActive ? " active" : "")}
                            to={spell.id}
                            {...others}
                        />
                    )}
                    style={{
                        cursor: "pointer",
                    }}
                    shadow="xs"
                    padding="md"
                >
                    <Title order={2}>{spell.name}</Title>
                    <Text mb="xs">
                        {spell.school?.name} {spell.subschool && `(${spell.subschool.name})`}
                        {spell.descriptors.length > 0 && ` [${spell.descriptors.join(", ")}]`}
                    </Text>
                    <Group gap="xs" mb="sm">
                        {spell.classes.map((value, index) => (
                            <Badge key={index} size="xs" bg="rose.4" color="black">
                                {value.class.name} {value.spellLevel}
                            </Badge>
                        ))}
                    </Group>
                    {spell.domains && spell.domains.length > 0 && (
                        <Text mb={0}>
                            Domain: {spell.domains.map((v) => `${v.domain.name} (${v.spellLevel})`).join(", ")}
                        </Text>
                    )}
                    {spell.subdomains && spell.subdomains.length > 0 && (
                        <Text mb={0}>
                            Subdomain: {spell.subdomains.map((v) => `${v.subdomain.name} (${v.spellLevel})`).join(", ")}
                        </Text>
                    )}
                    {spell.bloodlines && spell.bloodlines.length > 0 && (
                        <Text mb={0}>
                            Bloodline: {spell.bloodlines.map((v) => `${v.bloodline.name} (${v.classLevel})`).join(", ")}
                        </Text>
                    )}
                    {spell.patrons && spell.patrons.length > 0 && (
                        <Text mb={0}>
                            Patron: {spell.patrons.map((v) => `${v.patron.name} (${v.classLevel})`).join(", ")}
                        </Text>
                    )}
                    {spell.mysteries && spell.mysteries.length > 0 && (
                        <Text mb={0}>
                            Mystery:{" "}
                            {spell.mysteries.map((v) =>
                                `${v.mystery.name} (${v.classLevel}) ${v.note === null ? "" : `(${v.note})`}`
                            ).join(", ")}
                        </Text>
                    )}
                    <Text mb={0}>Casting Time: {spell.castingTime}</Text>
                    {spell.targets !== null && <Text mb={0}>Target: {spell?.targets}</Text>}
                    <Text mb={0}>Range: {spell.range}</Text>
                    {spell.area && <Text mb={0}>Area: {spell.area}</Text>}
                    <Text mb={0}>Duration: {spell.duration} {spell.dismissible && "[D]"}</Text>
                    <Text mb={0}>Saving Throw: {spell.savingThrow ?? "none"}</Text>
                    <Text mb={0}>Spell Resistance: {spell.spellResistance ?? "no"}</Text>
                    <Group gap="xs" mb="xs">
                        {spell.somatic && <Badge size="xs" bg="yellow.4" color="black">Somatic</Badge>}
                        {spell.verbal && <Badge size="xs" bg="yellow.4" color="black">Verbal</Badge>}
                        {spell.material && (
                            <Badge size="xs" bg="blue.4" color="black">
                                Material {spell.componentCost !== null && `${spell.componentCost}gp`}
                            </Badge>
                        )}
                        {spell.focus && <Badge size="xs" bg="blue.4" color="black">Focus</Badge>}
                        {spell.divineFocus && <Badge size="xs" bg="blue.4" color="black">Divine Focus</Badge>}
                    </Group>
                </Card>
            ))}
        </SimpleGrid>
    );
};

type SpellContentProps = {
    filters: Omit<SpellRequest["query"], "cursor" | "pageLength">;
};

const SpellContent: FC<SpellContentProps> = ({ filters }) => {
    const { ref, inViewport } = useInViewport();
    const { data, isFetching, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery<
        SpellResult,
        DefaultError,
        InfiniteData<SpellResult>,
        QueryKey,
        string | undefined
    >({
        queryKey: ["spell-list", filters],
        initialPageParam: undefined,
        queryFn: (ctx) => {
            return spellFetcher({
                cursor: ctx.pageParam,
                pageLength: "9",
                ...filters,
            });
        },
        getNextPageParam: (lastPage) => lastPage.endCursor ?? undefined,
    });

    useLazyEffect(
        () => {
            if (inViewport && hasNextPage) {
                fetchNextPage();
            }
        },
        [inViewport, hasNextPage, fetchNextPage],
        200,
    );

    return (
        <>
            <Title order={1} mb="sm">Pathfinder Spells</Title>
            {data ? data.pages.map((page, index) => <SpellPage key={index} spells={page.items} />) : null}
            {isFetching
                ? (
                    <Flex gap="md" justify="center" align="center">
                        <Loader size="xl" />
                    </Flex>
                )
                : null}
            <div ref={ref} />
        </>
    );
};

export const Spells: FC = () => {
    return (
        <>
            <Suspense
                fallback={
                    <Flex gap="md" justify="center" align="center">
                        <Loader size="xl" />
                    </Flex>
                }
            >
                <SpellContent filters={{}} />
            </Suspense>
            <Outlet />
        </>
    );
};
