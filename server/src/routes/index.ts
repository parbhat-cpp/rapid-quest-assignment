import express from "express";

import { Route } from "../common/interfaces/Route";
import imageRouter from "./image.routes";

const router = express.Router();

const routes: Array<Route> = [
    {
        path: '/image',
        router: imageRouter,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.router);
});

export default router;
