import { RouteObject } from "react-router";
import Homepage from "./pages/Homepage";
import Create from "./pages/Create";

export const routes: Array<RouteObject> = [
    {
        path: "/",
        element: <Homepage />,
        errorElement: <>Not found</>,
    },
    {
        path: "/create",
        element: <Create />,
    }
];
