<template>
	<div id="sidebar">
		<nav>
			<ul class="side-list">
				<div>
					<li class="logo-container">
						<a href="/home">
							<img
								class="logo"
								src="../components/icons/yUM MAP.png"
								alt="../components/icons/yUM MAP.pn"
							/>
						</a>
					</li>
					<li class="side-button">
						<a href="/maps">
							<font-awesome-icon
								:icon="['fas', 'magnifying-glass']"
								class="sideicon"
							/>
							<div>지도탐색</div>
						</a>
					</li>
					<li class="side-button">
						<font-awesome-icon :icon="['far', 'map']" class="sideicon" />
						<div>
							<a href=""> 마이맵스</a>
						</div>
					</li>
					<li class="side-button">
						<font-awesome-icon :icon="['fas', 'user']" class="sideicon" />
						<div>
							<a href=""> 마이페이지</a>
						</div>
					</li>
					<li class="side-button">
						<font-awesome-icon :icon="['fas', 'comment']" class="sideicon" />
						<div>
							<a href=""> 채팅</a>
						</div>
					</li>
				</div>

				<li class="side-button">
					<font-awesome-icon :icon="['fas', 'bars']" class="sideicon" />
					<a href=""></a>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
#sidebar {
	float: left;
	padding: 0;
	margin: 0;
	height: 100%;
	background-color: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

#sidebar > nav {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 4rem;
	height: 100%;
}
.logo-container {
	width: 100%; /* 부모 컨테이너의 크기에 맞게 설정 */
	height: auto; /* 높이를 자동으로 조정하여 비율을 유지 */
	margin-bottom: 1rem;
	overflow: hidden; /* 부모 컨테이너를 벗어나는 이미지를 잘라냄 */
}

.logo {
	width: 100%; /* 이미지를 부모 컨테이너의 100%로 설정 */
	height: auto; /* 높이를 자동으로 조정하여 비율을 유지 */
	padding: 10px;
}
.side-list {
	padding: 0;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.side-button {
	list-style: none;
	font-size: 10px;
	padding-top: 1rem;
}

a {
	text-decoration: none;
	color: #6c757d;
}
.sideicon {
	width: 1rem;
	height: 1rem;
	color: #6c757d;
}
</style>
