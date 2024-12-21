import { type DefaultError, type InfiniteData, type QueryKey, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { Button, Flex, Loader, Title } from "@mantine/core";

// @ts-types="@types/react"
import { type FC, Suspense } from "react";

import { spellFetcher, type SpellRequest, type SpellResult } from "@/client.tsx";

type SpellPageProps = {
    filters: Omit<SpellRequest["query"], "cursor" | "pageLength">;
};

const SpellPage: FC<SpellPageProps> = ({ filters }) => {
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
                ...filters,
            });
        },
        getNextPageParam: (lastPage) => lastPage.endCursor ?? undefined,
    });

    return (
        <>
            <Title order={1}>
                Pathfinder Spells
                {isFetching ? <Loader size="sm" style={{ marginLeft: "10px" }} /> : null}
            </Title>
            {data
                ? (
                    <>
                        <ul>
                            {data.pages.map((page, pageIndex) => (
                                page.items.map((spell, index) => <ul key={pageIndex * 10 + index}>{spell.name}</ul>)
                            ))}
                        </ul>
                        <Button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
                            Load More
                        </Button>
                    </>
                )
                : null}
        </>
    );
};

export const Spells: FC = () => {
    return (
        <Suspense
            fallback={
                <Flex gap="md" justify="center" align="center">
                    <Loader size="xl" />
                </Flex>
            }
        >
            <SpellPage filters={{}} />
        </Suspense>
    );
};
