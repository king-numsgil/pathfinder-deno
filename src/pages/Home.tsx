import { Helmet } from "react-helmet-async";

// @ts-types="@types/react"
import { type FC } from "react";

export const Home: FC = () => {
    return <>
        <Helmet>
            <title>Home - NumsgilCo Tabletop</title>
        </Helmet>
        <h1>Vite + React</h1>
    </>;
};
