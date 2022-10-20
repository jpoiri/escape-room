<script setup>
import VSplitInput from '../components/VSplitInput.vue';
import VTimer from '../components/VTimer.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

let answer = ref('');

async function onSubmit(e) {
	e.preventDefault();
	try {
		await axios.post('/api/answers', {
			answer: answer.value
		});
		router.push('/success');
	} catch (e) {
		router.push('/bad');
	}
}
</script>

<template>
	<main class="container">
		<p class="message">Thou shall enter the secret passcode</p>
		<form @submit="onSubmit">
			<VSplitInput v-model="answer" />
			<button type="submit">Submit</button>
		</form>
		<VTimer />
	</main>
</template>

<style scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	color: white;
	flex-direction: column;
}

.message {
	text-align: center;
	font-size: 2.3rem;
	font-weight: 300;
}

form {
	text-align: center;
	margin-top: 20px;
}
</style>
