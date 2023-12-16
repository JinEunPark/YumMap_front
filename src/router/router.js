import { createRouter, createWebHistory } from "vue-router";
import MapList from "../pages/maps/MapList.vue";
import HomeView from "../pages/home/HomeView.vue";
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/maps", component: MapList },

		{ path: "/home", component: HomeView },

		{ path: "/register", component: null },
		{ path: "/request", component: null },
		{ path: "/:notFound(.*)", component: null },
	],
});

export default router;
