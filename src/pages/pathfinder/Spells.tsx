import useSwr from "swr";

// @ts-types="@types/react"
import { type FC, Suspense } from "react";

import { spellFetcher } from "@/client.tsx";

const SpellPage: FC = () => {
    const {data} = useSwr(
        "spell-list",
        spellFetcher({
            query: {},
        }),
        {
            suspense: true,
        },
    );

    return (
        <>
            {data.items.map((spell, index) => (
                <h1 key={index}>{spell.name}</h1>
            ))}
        </>
    );
}

export const Spells: FC = () => {
    return (
        <>
            <h1>Vite + React</h1>
            <Suspense fallback={<h2>Loading...</h2>}>
                <SpellPage />
            </Suspense>
        </>
    );
};
