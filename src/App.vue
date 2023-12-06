<template>
	<div id="app">
		<SideBar></SideBar>
		<router-view></router-view>
		aaaaaaaaaaaaaaaaa
	</div>
</template>

<script>
import SideBar from "./layouts/SideBar.vue";
import MapList from "./pages/maps/MapList.vue";
import { RouterView } from "vue-router";
export default {
	components: { SideBar, RouterView, MapList },
};
</script>
<style scoped>
body {
	margin: 0;
}

#app {
	width: 100vw;
	height: 100vh;
}
</style>
