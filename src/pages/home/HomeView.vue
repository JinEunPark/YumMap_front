<template>
	<div id="home-banner">
		<home-head></home-head>

		<div class="rectangle">
			<div class="mid-title">
				오늘의 인기 식구들에게 참여 요청을 보내보세요!
			</div>
			<food-room></food-room>
			<food-room></food-room>

			<food-room></food-room>
			<food-room></food-room>
			<food-room></food-room>

			<food-room></food-room>
			<food-room></food-room>
		</div>
	</div>
</template>

<script>
import HomeHead from "../../components/HomeHead.vue";
import FoodRoom from "../../components/FoodRoom.vue";

export default {
	components: {
		HomeHead,
		FoodRoom,
	},
};
</script>

<style scoped>
#home-banner {
	overflow: auto;
	height: 100%;
}

.rectangle {
	background: #ffffff;
	width: 100%;
	height: 50%; /* Adjust the height as needed */
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start; /* Add this line to align items to the top */
}

.mid-title {
	margin: 1rem 0 1rem 1rem;
	font-size: 1.1rem;
	font-weight: bold;
}
</style>
