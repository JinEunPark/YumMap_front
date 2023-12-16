<template>
	<div id="side-vue">
		<slot> </slot>
		<div class="home-button">
			<b-button variant="outline-light">&lt;</b-button>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
};
</script>
<style scoped>
#side-vue {
	background-color: #f9f9f9;
	height: 100%;
	width: 25vw;
	margin-left: 1vw;
	align-content: center;
}

.home-button {
	position: absolute;
	top: 95%; /* 원하는 상대적인 위치로 조절하세요. */
	left: 20%; /* 원하는 상대적인 위치로 조절하세요. */
	background-color: rgb(95, 61, 196);
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>
