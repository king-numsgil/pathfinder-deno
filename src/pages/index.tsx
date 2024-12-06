import { Routes, Route, Outlet } from "react-router-dom";

// @ts-types="@types/react"
import type { FC } from "react";

import { SpellSingle } from "@/pages/pathfinder/SpellSingle.tsx";
import { FeatSingle } from "@/pages/pathfinder/FeatSingle.tsx";
import { RootLayout } from "@/components/RootLayout.tsx";
import { Spells } from "@/pages/pathfinder/Spells.tsx";
import { Feats } from "@/pages/pathfinder/Feats.tsx";
import { Home } from "@/pages/Home.tsx";

export const NumsgilRoutes: FC = () => (
    <Routes>
        <Route element={
            <RootLayout>
                <Outlet />
            </RootLayout>
        }>
            <Route index element={<Home />} />
            <Route path="pathfinder">
                <Route path="spells" element={<Spells />}>
                    <Route path=":spellId" element={<SpellSingle />} />
                </Route>
                <Route path="feats" element={<Feats />}>
                    <Route path=":featId" element={<FeatSingle />} />
                </Route>
            </Route>
        </Route>
    </Routes>
);
