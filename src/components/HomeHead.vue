<template>
	<div class="card">
		<div class="card-body">
			<div class="head-section">
				<div class="logo-container">
					<img
						class="logo"
						src="../components/icons/yumMap.png"
						alt="../components/icons/yUM MAP.pn"
					/>
				</div>
				<button class="login-button" pill>로그인/회원가입</button>
			</div>

			<section class="main-section">
				<h4 class="slogon">우리들 만의 맛집비도 얌맵과 함께!</h4>

				<section class="cur-info">
					현재 등록된 맛집 수
					<p style="color: indigo">2500개</p>
				</section>
				<p class="cur-info">입맛대로 공유하기!</p>
			</section>

			<section>
				<div class="find">
					<div class="head-text">나에게 맞는 식구 찾기</div>
					<font-awesome-icon
						:icon="['fas', 'magnifying-glass']"
						class="sideicon"
					/>
				</div>
				<div class="info">
					<div class="head-text">사용설명서</div>
					<font-awesome-icon :icon="['fas', 'book']" class="side-info" />
				</div>
			</section>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
};
</script>
<style scoped>
.card {
	width: 95%;
	float: center;
	margin-left: 0.5rem;
	margin-top: 0.5rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.logo-container {
	width: 35%; /* 부모 컨테이너의 크기에 맞게 설정 */
	height: auto; /* 높이를 자동으로 조정하여 비율을 유지 */
	overflow: hidden; /* 부모 컨테이너를 벗어나는 이미지를 잘라냄 */
	float: left;
	margin-top: 1rem;
}

.logo {
	width: 100%; /* 이미지를 부모 컨테이너의 100%로 설정 */
	height: auto; /* 높이를 자동으로 조정하여 비율을 유지 */
	padding: 10px;
}

.login-button {
	background: #ffffff;
	border-radius: 20px;
	color: indigo;
	border: 1px solid indigo;
	width: 6rem;
	height: 2rem;
	margin-top: 1rem;
	font-size: 0.7vw;
}
.login-button:hover {
	background-color: bisque;
}

.head-section {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-right: 1rem;
}
.slogon {
	width: 90%;
	margin-top: 1rem;
	margin-bottom: 0.5rem;
	font-size: 1.5rem;
	line-height: 2.125rem;
	letter-spacing: -0.25px;
	font-weight: 700;
}
.cur-info {
	font-size: 0.875rem;
	line-height: 1.375rem;
	letter-spacing: -0.25px;
}

.find {
	border: #1a66cc 1px solid;
	background: linear-gradient(
		90deg,
		rgb(92, 124, 250) -31.1%,
		rgb(59, 91, 219) 100%
	);
	color: #ffffff;
	font-weight: bold;
	font-size: 1vw;
	border-radius: 10px;
	height: 40px;
	width: 95%;
	text-align: left;
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem, 1rem, 1rem, 1rem;
	margin-bottom: 1rem;
}

.info {
	height: 40px;
	width: 95%;
	text-align: start;
	border: 1px dashed rgb(121, 80, 242);
	border-radius: 10px;
	color: rgb(121, 80, 242);
	font-size: 1vw;
	text-align: left;
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem, 1rem, 1rem, 1rem;
	margin-bottom: 1rem;
}

.sideicon {
	color: #ffffff;
	margin-right: 1rem;
}
.side-info {
	color: rgb(121, 80, 242);
	margin-right: 1rem;
}
.head-text {
	margin-left: 1rem;
}
</style>
