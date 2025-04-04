import { useDebouncedValue, useDisclosure, useInViewport } from "@mantine/hooks";
import { NavLink as RouterNavLink, Outlet } from "react-router-dom";
import { Cross1Icon, GearIcon } from "@radix-ui/react-icons";
import {
    ActionIcon,
    Badge,
    Card,
    Flex,
    Group,
    Loader,
    Modal,
    NativeSelect,
    SimpleGrid,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import {
    type DefaultError,
    type InfiniteData,
    type QueryKey,
    useQuery,
    useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

// @ts-types="@types/react"
import { type FC, Suspense, useState } from "react";

import { spellFetcher, type SpellRequest, type SpellResult, spellTaxonomyFetcher } from "@/client.tsx";
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
                            Mystery: {spell.mysteries.map((v) =>
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

type SpellFilterType = Omit<SpellRequest["query"], "cursor" | "pageLength">;

type SpellContentProps = {
    filters: SpellFilterType;
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

type SpellFilterProps = {
    filters: SpellFilterType;
    onFilterChange: (filters: SpellFilterType) => void;
};

const SpellFilter: FC<SpellFilterProps> = ({ filters, onFilterChange }) => {
    const [opened, { open, close }] = useDisclosure(false);

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["spell-taxonomy"],
        queryFn: spellTaxonomyFetcher,
        staleTime: 1000 * 60 * 10,
    });

    return (
        <>
            <TextInput
                label="Search spell by name"
                value={filters.name ?? ""}
                onChange={(event) => onFilterChange({ ...filters, name: event.target.value })}
                mb="md"
                rightSectionWidth="md"
                rightSection={
                    <Group gap="xs">
                        {Object.keys(filters).length > 0 && (
                            <ActionIcon
                                variant="subtle"
                                onClick={() => onFilterChange({})}
                            >
                                <Cross1Icon />
                            </ActionIcon>
                        )}
                        <ActionIcon
                            variant="subtle"
                            onClick={() => open()}
                        >
                            <GearIcon />
                        </ActionIcon>
                    </Group>
                }
            />

            <Modal
                onClose={close}
                opened={opened}
                title={`Spell Filters (${Object.keys(filters).length} applied)`}
                size="lg"
                overlayProps={{
                    transitionProps: {
                        duration: 300,
                        exitDuration: 300,
                    },
                    blur: 5,
                }}
                centered
            >
                {isLoading && (
                    <Flex gap="md" justify="center" align="center">
                        <Loader size="xl" />
                    </Flex>
                )}
                {isSuccess && (
                    <>
                        <Group grow>
                            <NativeSelect
                                label="Spell School"
                                value={filters.$school}
                                onChange={(e) =>
                                    onFilterChange({
                                        ...filters,
                                        $school: e.target.value === "" ? undefined : e.target.value,
                                    })}
                                data={[
                                    { label: "Any", value: "" },
                                    ...data.schools.map((item) => ({ label: item.name, value: item.id })),
                                ]}
                            />
                            <NativeSelect
                                label="Spell Subschool"
                                value={filters.$subschool}
                                onChange={(e) =>
                                    onFilterChange({
                                        ...filters,
                                        $subschool: e.target.value === "" ? undefined : e.target.value,
                                    })}
                                data={[
                                    { label: "Any", value: "" },
                                    ...data.subschools.map((item) => ({ label: item.name, value: item.id })),
                                ]}
                            />
                        </Group>
                        <Group grow>
                            <NativeSelect
                                label="Spellcasting Class"
                                value={filters.$class}
                                onChange={(e) =>
                                    onFilterChange({
                                        ...filters,
                                        $class: e.target.value === "" ? undefined : e.target.value,
                                    })}
                                data={[
                                    { label: "Any", value: "" },
                                    ...data.classes.map((item) => ({ label: item.name, value: item.id })),
                                ]}
                            />
                            <NativeSelect
                                label="Spell Level"
                                value={filters.spellLevel?.toString()}
                                onChange={(e) =>
                                    onFilterChange({
                                        ...filters,
                                        spellLevel: e.target.value === "" ? undefined : parseInt(e.target.value),
                                    })}
                                data={[
                                    { label: "All", value: "" },
                                    { label: "Cantrip/Orison", value: "0" },
                                    { label: "1st Level", value: "1" },
                                    { label: "2nd Level", value: "2" },
                                    { label: "3rd Level", value: "3" },
                                    { label: "4th Level", value: "4" },
                                    { label: "5th Level", value: "5" },
                                    { label: "6th Level", value: "6" },
                                    { label: "7th Level", value: "7" },
                                    { label: "8th Level", value: "8" },
                                    { label: "9th Level", value: "9" },
                                ]}
                            />
                        </Group>
                        <Group grow>
                            <NativeSelect
                                label="Divine Domain"
                                value={filters.$domain}
                                onChange={(e) =>
                                    onFilterChange({
                                        ...filters,
                                        $domain: e.target.value === "" ? undefined : e.target.value,
                                    })}
                                data={[
                                    { label: "Any", value: "" },
                                    ...data.domains.map((item) => ({ label: item.name, value: item.id })),
                                ]}
                            />
                            <NativeSelect
                                label="Divine Subdomain"
                                value={filters.$subdomain}
                                onChange={(e) =>
                                    onFilterChange({
                                        ...filters,
                                        $subdomain: e.target.value === "" ? undefined : e.target.value,
                                    })}
                                data={[
                                    { label: "Any", value: "" },
                                    ...data.subdomains.map((item) => ({ label: item.name, value: item.id })),
                                ]}
                            />
                        </Group>
                        <Group grow>
                            <NativeSelect
                                label="Patron"
                                value={filters.$patron}
                                onChange={(e) =>
                                    onFilterChange({
                                        ...filters,
                                        $patron: e.target.value === "" ? undefined : e.target.value,
                                    })}
                                data={[
                                    { label: "Any", value: "" },
                                    ...data.patrons.map((item) => ({ label: item.name, value: item.id })),
                                ]}
                            />
                            <NativeSelect
                                label="Bloodline"
                                value={filters.$bloodline}
                                onChange={(e) =>
                                    onFilterChange({
                                        ...filters,
                                        $bloodline: e.target.value === "" ? undefined : e.target.value,
                                    })}
                                data={[
                                    { label: "Any", value: "" },
                                    ...data.bloodlines.map((item) => ({ label: item.name, value: item.id })),
                                ]}
                            />
                        </Group>
                        <NativeSelect
                            label="Mystery"
                            value={filters.$mystery}
                            onChange={(e) =>
                                onFilterChange({
                                    ...filters,
                                    $mystery: e.target.value === "" ? undefined : e.target.value,
                                })}
                            data={[
                                { label: "Any", value: "" },
                                ...data.mysteries.map((item) => ({ label: item.name, value: item.id })),
                            ]}
                        />
                    </>
                )}
            </Modal>
        </>
    );
};

export const Spells: FC = () => {
    const [filters, setFilters] = useState<SpellFilterType>({});
    const [debouncedFilters] = useDebouncedValue(filters, 200);

    return (
        <>
            <SpellFilter filters={filters} onFilterChange={(newFilters) => setFilters(newFilters)} />
            <Suspense
                fallback={
                    <Flex gap="md" justify="center" align="center">
                        <Loader size="xl" />
                    </Flex>
                }
            >
                <SpellContent filters={debouncedFilters} />
            </Suspense>
            <Outlet />
        </>
    );
};
