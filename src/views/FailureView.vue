<template>
	<main class="container">
		<div class="frame">
			<img src="../assets/tarot-fool-card.png" />
		</div>
		 <p class="caption">"Thou shall not just guess a number"</p>
		<button @click="back">Back</button>
	</main>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function back() {
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
