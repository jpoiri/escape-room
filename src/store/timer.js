import { defineStore } from 'pinia';

export const useTimerStore = defineStore('timer', {
	state: () => ({
		countDownDate: null,
		timeRemaining: null,
		interval: null,
		isRunning: false,
		isTimeElapsed: false
	}),

	getters: {
		hoursRemaining: (state) => {
			return Math.floor((state.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		},
		minutesRemaining: (state) => {
			return Math.floor((state.timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		},
		secondsRemaining: (state) => {
			return Math.floor((state.timeRemaining % (1000 * 60)) / 1000);
		}
	},

	actions: {
		startTimer(numberOfHours) {
			if (!this.isRunning) {
				const now = new Date().getTime();
				this.countDownDate = new Date(now + numberOfHours * 60 * 60 * 1000).getTime();
				this.isRunning = false
				this.isTimeElapsed = false
				this.interval = setInterval(() => {
					this.isRunning = true;
					const now = new Date().getTime();
					this.timeRemaining = this.countDownDate - now;
					if (now >= this.countDownDate) {
						this.isRunning = false;
						this.isTimeElapsed = true;
						clearInterval(this.interval);
					}
				}, 1000);
			}
		},
		stopTimer() {
			this.time = null;
		}
	}
});
