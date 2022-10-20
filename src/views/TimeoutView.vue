<template>
	<main class="container">
		<div class="frame">
			<img src="../assets/tarot-death-card.jpg" />
		</div>
		<p class="caption">"Thus you have reached the end of time"</p>
		<button @click="back">Try Again</button>
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
	margin: 20px;
}

img {
	width: 100%;
}
</style>
