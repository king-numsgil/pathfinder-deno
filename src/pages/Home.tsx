import { type RouteObject } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// @ts-types="@types/react"
import { type FC } from "react";

const Home: FC = () => {
    return <>
        <Helmet>
            <title>Home - NumsgilCo Tabletop</title>
        </Helmet>
        <h1>Vite + React</h1>
    </>;
};

const route: RouteObject = {
    path: "/",
    element: <Home />,
};
export default route;
