<script setup>
import { useTimerStore } from './store/timer';
import { watch } from 'vue';
import { RouterView, useRouter } from 'vue-router';

const timer = useTimerStore();
const router = useRouter();

timer.startTimer(1);

timer.$subscribe(() => {
	if (timer.isTimeElapsed) {
		router.push('/timeout');
	}
});
</script>

<template>
	<RouterView />
</template>
