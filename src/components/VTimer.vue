<template>
	<p v-if="timer.isRunning">{{ timer.hoursRemaining }} : {{ timer.minutesRemaining }} : {{ timer.secondsRemaining }}</p>
</template>
<script setup>
import { useTimerStore } from '../store/timer';

const timer = useTimerStore();
</script>

<style scoped>
p {
	font-size: 1.4rem;
	font-weight: 300;
}
</style>
