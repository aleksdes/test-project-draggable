import indexRoutes from "~/pages/index/router/routes.js";

const routes = [...indexRoutes];

export default [
  ...routes,
  {
    component: () => import("~/pages/Errors/404NotFound.vue"),
    name: "notFound",
    path: "/:pathMatch(.*)*",
  },
];
