<template>
	<div class="digits">
		<input maxlength="1" type="tel" name="digit1" v-model="val1" @focus="onFocus" @input="onInput" @keyup="onKeydown" />
		<input maxlength="1" type="tel" name="digit2" v-model="val2" @focus="onFocus" @input="onInput" @keyup="onKeydown" />
		<input maxlength="1" type="tel" name="digit3" v-model="val3" @focus="onFocus" @input="onInput" @keyup="onKeydown" />
		<input maxlength="1" type="tel" name="digit4" v-model="val4" @focus="onFocus" @input="onInput" @keyup="onKeydown" />
	</div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
	modelValue: {
		type: String,
		required: true
	}
});

let val1 = ref(props.modelValue.substr(0, 1));
let val2 = ref(props.modelValue.substr(1, 1));
let val3 = ref(props.modelValue.substr(2, 1));
let val4 = ref(props.modelValue.substr(3, 1));

function onInput(e) {
	e.target.value = e.target.value.replace(/[^0-9]/g, '');
	emit('update:modelValue', `${val1.value}${val2.value}${val3.value}${val4.value}`);
	if (e.target.value && e?.target?.nextElementSibling?.nodeName === 'INPUT') {
		e.target.nextElementSibling.focus();
	}
}

function onKeydown(e) {
	// handle backspace key
	if (e.keyCode === 8 && e?.target?.previousElementSibling?.nodeName === 'INPUT') {
		e.target.previousElementSibling.focus();
	}
}
</script>

<style scoped>
input {
	font-size: 5rem;
	width: 5.5rem;
	text-align: center;
	margin: 0 0 0 20px;
	color: white;
	background-color: black;
	border: 2px solid transparent;
}
input:first-child {
	margin: 0;
}
input:focus {
	border: 2px solid #eff9ff;
	outline: none;
}

@media screen and (max-width: 543px) {
	input {
		font-size: 3.5rem;
		width: 3.5rem;
	}
}

@media screen and (max-width: 375px) {
	input {
		font-size: 2.5rem;
		width: 2.5rem;
	}
}
</style>
