<template>
	<div id="map" style="width: 100%; height: 100%"></div>
</template>
<script>
export default {
	mounted() {
		// 네이버 지도 API 로드
		const script = document.createElement("script");
		script.src =
			"https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=sme0k3lyml";
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);

		script.onload = () => {
			// 네이버 지도 생성
			new window.naver.maps.Map("map", {
				center: new window.naver.maps.LatLng(37.5670135, 126.978374),
				zoom: 10,
			});
		};
	},
};
</script>
<style scoped>
#map {
	display: block;
}
</style>
