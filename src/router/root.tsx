import {createBrowserRouter } from "react-router-dom";
import * as React from "react";
import ErrorPage from "../pages/error page/ErrorPage";
import Pokemon from "../components/pokemon/Pokemon";
import Ability from "../components/ability/Ability";
import App from "../App";

export const root = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/pokemon/:pokemonId',
        element: <Pokemon/>,
        children: [{
            path: '/pokemon/:pokemonId/:ability',
            element: <Ability/>
        }]
    }
]);