import { useSuspenseQuery } from "@tanstack/react-query";

// @ts-types="@types/react"
import { type FC, Suspense } from "react";

import { spellFetcher, type SpellRequest } from "@/client.tsx";

type SpellPageProps = {
    filters: Omit<SpellRequest["query"], "cursor" | "pageLength">;
};

const SpellPage: FC<SpellPageProps> = ({ filters }) => {
    const { data, isFetching } = useSuspenseQuery({
        queryKey: ["spell-list", filters],
        queryFn: () => {
            return spellFetcher(filters);
        },
    });

    return (
        <>
            {isFetching ? <h1>Loading...</h1> : null}
            {data
                ? (
                    <ul>
                        {data.items.map((spell, index) => <ul key={index}>{spell.name}</ul>)}
                    </ul>
                )
                : null}
        </>
    );
};

export const Spells: FC = () => {
    return (
        <>
            <h1>Vite + React</h1>
            <Suspense fallback={<h2>Loading...</h2>}>
                <SpellPage filters={{}} />
            </Suspense>
        </>
    );
};
