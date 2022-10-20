<template>
	<main class="container">
		<div class="frame">
			<img src="../assets/tarot-sun-card.png" />
		</div>
		<p class="caption">"You have successfully overcome the challenge may your light shine"</p>
		<button @click="back">Replay</button>
	</main>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useTimerStore } from '../store/timer';

const router = useRouter();
const timer = useTimerStore();

function back() {
	timer.startTimer(1);
	router.push('/');
}
</script>
<style scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 900px;
	color: white;
	font-size: 20px;
}

.caption {
	margin: 20px;
	font-size: 1.3rem;
	font-weight: 300;
}

.frame {
	text-align: center;
	padding: 20px;
	border: 1px solid white;
}

img {
	width: 100%;
	border: 25px solid black;
}
</style>
