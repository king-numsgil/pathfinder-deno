import { type RouteObject } from "react-router-dom";

import { SpellSingle } from "@/pages/pathfinder/SpellSingle.tsx";
import { FeatSingle } from "@/pages/pathfinder/FeatSingle.tsx";
import { Spells } from "@/pages/pathfinder/Spells.tsx";
import { Feats } from "@/pages/pathfinder/Feats.tsx";

export const pathfinder: RouteObject = {
    path: "pathfinder",
    children: [
        {
            path: "spells",
            element: <Spells />,
            children: [
                {
                    path: ":spellId",
                    element: <SpellSingle />,
                },
            ],
        },
        {
            path: "feats",
            element: <Feats />,
            children: [
                {
                    path: ":featId",
                    element: <FeatSingle />,
                },
            ],
        },
    ],
};
