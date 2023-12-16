<template>
	<div id="app">
		<SideBar></SideBar>
		<side-view>
			<router-view></router-view>
		</side-view>
		<map-view></map-view>
	</div>
</template>

<script>
import SideBar from "./layouts/SideBar.vue";
import MapList from "./pages/maps/MapList.vue";
import { RouterView } from "vue-router";
import SideView from "./layouts/SideView.vue";
import MapView from "./layouts/MapView.vue";
export default {
	components: { SideBar, RouterView, MapList, SideView, MapView },
};
</script>
<style scoped>
body {
	margin: 0;
}

#app {
	width: 100vw;
	height: 100vh;
	float: left;
	display: flex;
	flex-direction: row;
	justify-content: start;
}
/* 
.container {
	
	height: 100%;
	width: 100%;
} */
</style>
