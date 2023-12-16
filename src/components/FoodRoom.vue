<template>
	<div class="card">
		<section class="tag-info content">
			<tag-com></tag-com>
			<tag-com></tag-com>
			<tag-com></tag-com>
		</section>
		<section>
			<div class="title content">마라식구</div>
		</section>
		<section class="detail-info content">
			인원 44 <span class="seper">|</span> 등록된 맞집 수 54 개 <br />
			서울<span class="seper">|</span> 평균비용 100000원
		</section>
	</div>
</template>
<script>
import TagCom from "./TagCom.vue";
export default {
	components: {
		TagCom,
	},
};
</script>
<style scoped>
.card {
	width: 95%;
	margin: 0 auto; /* 요소를 수평으로 가운데 정렬합니다. */
	height: fit-content;
	margin-top: 0.5rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 15px;
}
.title {
	font-size: 1rem;
	font-weight: bold;
}

.content {
	margin: 3px 10px 3px 10px;
}
.seper {
	color: #e9ecef;
}
.detail-info {
	color: #868e96;
	font-size: 0.7rem;
	margin-bottom: 1rem;
}
.tag-info {
	display: flex;
	flex-direction: row;
	margin-top: 1vh; /* 적절한 값으로 조절하세요. */
}
</style>
