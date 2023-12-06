import { createRouter, createWebHistory } from "vue-router";
import MapList from "../pages/maps/MapList.vue";
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/maps" },
		{ path: "/maps", component: null },
		{
			path: "/maps/:id",
			component: null,
			children: [{ path: "points", component: null }],
		},
		{ path: "/register", component: null },
		{ path: "/request", component: null },
		{ path: "/:notFound(.*)", component: null },
	],
});

export default router;
