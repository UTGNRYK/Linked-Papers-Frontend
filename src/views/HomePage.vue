<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import jsonp from 'jsonp';


const body = document.body;
const tmp = ref("");

onMounted(() => {
	testGet();
})

const Search = (e) => {
	e.preventDefault();
	body.classList.add('is-searching');
	setTimeout(function() {
		body.classList.remove('is-searching');
	}, 2000);
}

const testGet = () => {
	console.log("Hello!")



	// this.$jsonp('http://localhost:8000/polls', {})
	// 	.then(response => {
	// 		console.log(response)
	// 	})
	// 	// .catch(error => {
	// 	// 	console.error(error)
	// 	// })


	jsonp('http://localhost:8000/polls', null, (err, data) => {
		if (err) {
			// console.error(err.message);
		} else {
			console.log("Hi!")
			console.log(data);
		}
	});


	// axios.get('http://localhost:8000/polls')
	// 	.then(res => {
	// 		console.log(res.data)
	// 		tmp.value = res.data;
	// 	})
}
</script>

<template>
	<body>
		<main>
			<form>
				<h1>Hello World! {{tmp}}</h1>
				<div style="display: flex; flex-direction: row">
					<input type="text" class="input"/>
					<button class="search" @click="Search">Search</button>
				</div>
			</form>
			<div class="search-glass">
				<div class="speech-bubble">
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
				<div class="frame">
					<div class="frame__outside"></div>
					<div class="frame__inside">
						<div class="shine"></div>
					</div>
					<div class="lens"></div>
					<div class="eye">
						<div class="eye__ball"></div>
					</div>
				</div>
				<div class="handle">
					<div class="connector"></div>
					<div class="handle__top">
						<div class="shine"></div>
					</div>
					<div class="handle__bottom">
						<div class="shine"></div>
					</div>
				</div>
			</div>
		</main>
	</body>
</template>

<style scoped>
* {
	box-sizing: border-box;
}

html {
	transition: opacity 0.5s;
}
html.is-hidden {
	opacity: 0;
	transition: opacity 0s;
}

body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	font-family: "Helvetica", Arial, sans-serif;
}

main {
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(45deg, #26547c 0%, #06d6a0 100%);
}

form {
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 12px;
	margin: 300px 0 0 0;
	width: 100%;
	max-width: 400px;
	transform: translateZ(0);
}
form input[type=text] {
	flex: 1;
	padding: 12px;
	width: 100%;
	font-size: 16px;
	outline: none;
	border: 1px solid #706778;
	border-radius: 0;
	transition: background-color 0.2s ease-out;
}
form input[type=text]:focus {
	background-color: #fefbf3;
}
form .search {
	padding: 12px 24px;
	font-size: 16px;
	text-align: center;
	color: #ffffff;
	background-color: #706778;
	border: 1px solid #706778;
	border-radius: 0;
	outline: none;
	cursor: pointer;
	transition: background-color 0.2s;
}
form .search:hover {
	background-color: #564f5d;
}

input {
	font-family: 'Consolas', sans-serif;
	font-size: 16px;
	font-weight: bold;
}

.shine {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 10%;
	height: 200%;
	background-color: #f9e0a1;
}
.shine:after {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	content: "";
	width: 60%;
	background-color: inherit;
}

.speech-bubble {
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: relative;
	padding: 14% 10%;
	width: 50%;
	height: auto;
	background-color: #f15898;
	border-radius: 100px;
	z-index: 3;
	transform: rotate(25deg) translate(120%, -50%);
}
.speech-bubble:before {
	content: "";
	position: absolute;
	top: 60%;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 40%;
	height: 40%;
	background-color: inherit;
	transform: rotate(-40deg) skew(-40deg);
}
.speech-bubble .dot {
	position: relative;
	width: 15%;
	margin: 0;
	background-color: #ffffff;
	z-index: 4;
}
.speech-bubble .dot:after {
	content: "";
	display: block;
	padding-bottom: 100%;
}

.search-glass {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	max-width: 200px;
	transform: rotate(-25deg) translateZ(0);
}

.frame {
	position: relative;
	width: 100%;
	border-radius: 100px;
	z-index: 2;
}
.frame:after {
	content: "";
	display: block;
	padding-bottom: 100%;
}
.frame > * {
	border-radius: 100px;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
}
.frame > *:after {
	content: "";
	display: block;
	padding-bottom: 100%;
}
.frame__outside {
	left: -12%;
	width: 112%;
	background-color: #e9a444;
}
.frame__inside {
	background-color: #f5be30;
	overflow: hidden;
	transform: rotate(20deg);
}

.lens {
	width: 72%;
	height: 72%;
	background-color: #be7b22;
	border-bottom: 2px solid #bee3f2;
	border-left: 2px solid #bee3f2;
	overflow: hidden;
	transform: translateZ(0);
}
.lens:before {
	content: "";
	position: absolute;
	right: 0;
	bottom: 0;
	margin: auto;
	top: 25%;
	left: -18%;
	border-radius: 100px;
	width: 110%;
	height: 110%;
	background-color: #94d1e9;
}
.lens:before:after {
	content: "";
	display: block;
	padding-bottom: 100%;
}

.eye {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 40%;
	height: 35%;
	background-color: #ffffff;
	border-radius: 0 60px;
	transform: rotate(-15deg);
}
.eye__ball {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 55%;
	height: 60%;
	background-color: #405c78;
	border-radius: 100%;
}
.eye__ball:before, .eye__ball:after {
	content: "";
	background-color: #ffffff;
	border-radius: 100%;
}
.eye__ball:before {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 25%;
	height: 25%;
}
.eye__ball:after {
	position: absolute;
	top: 20%;
	right: -6%;
	bottom: auto;
	left: auto;
	margin: auto;
	width: 35%;
	height: 35%;
}

.handle {
	position: relative;
	margin-top: 14%;
	width: 30%;
	background: #c8543f repeating-linear-gradient(to bottom, #7d3224, #7d3224 8%, #c8543f 8%, #c8543f 18.4%);
}
.handle:after {
	content: "";
	display: block;
	padding-bottom: 210%;
}
.handle:before {
	content: "";
	position: absolute;
	top: 0;
	right: auto;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 43%;
	height: 100%;
	background-color: black;
	opacity: 0.15;
}
.handle__top, .handle__bottom {
	width: 136%;
	height: 16%;
	background-color: #f5be30;
	z-index: 2;
	overflow: hidden;
}
.handle__top:before, .handle__bottom:before {
	content: "";
	position: absolute;
	top: 0;
	right: auto;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 30%;
	height: 100%;
	background-color: black;
	opacity: 0.15;
}
.handle__top .shine, .handle__bottom .shine {
	position: absolute;
	top: 0;
	right: 25%;
	bottom: 0;
	left: auto;
	margin: auto;
	transform: rotate(20deg);
}
.handle__top {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 100%;
	left: -18%;
	margin: auto;
}
.handle__bottom {
	position: absolute;
	top: 100%;
	right: 0;
	bottom: 0;
	left: -18%;
	margin: auto;
}

.connector {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 140%;
	left: 0;
	margin: auto;
	width: 40%;
	height: 25%;
	background-color: #706778;
	z-index: 1;
}
.connector:after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: auto;
	margin: auto;
	width: 50%;
	background-color: #8a8092;
}

form {
	z-index: 1;
	transition: opacity 0.4s 0.3s ease-out, z-index 0s 1s;
}

.search-glass {
	-webkit-animation: exit 0.4s ease-out forwards;
	animation: exit 0.4s ease-out forwards;
}

.eye__ball {
	-webkit-animation: look-around-you 3s alternate infinite;
	animation: look-around-you 3s alternate infinite;
}
.eye__ball:before, .eye__ball:after {
	-webkit-animation: shimmer 0.2s infinite;
	animation: shimmer 0.2s infinite;
}

.is-searching form {
	z-index: -1;
	opacity: 0.2;
	transition: opacity 0.2s ease-out, z-index 0s;
}
.is-searching .search-glass {
	-webkit-animation: enter 0.4s ease-out forwards, hovering 1s 0.51s ease-in-out infinite;
	animation: enter 0.4s ease-out forwards, hovering 1s 0.51s ease-in-out infinite;
}
.is-searching .speech-bubble {
	transform: scale(0);
	-webkit-animation: wobble-in 1s 0.41s ease-out forwards;
	animation: wobble-in 1s 0.41s ease-out forwards;
}
.is-searching .speech-bubble .dot {
	opacity: 0;
	-webkit-animation: dotdotdot 0.4s 0.41s linear alternate infinite;
	animation: dotdotdot 0.4s 0.41s linear alternate infinite;
}
.is-searching .speech-bubble .dot:nth-child(1) {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}
.is-searching .speech-bubble .dot:nth-child(2) {
	-webkit-animation-delay: 0.4s;
	animation-delay: 0.4s;
}
.is-searching .speech-bubble .dot:nth-child(3) {
	-webkit-animation-delay: 0.6s;
	animation-delay: 0.6s;
}

@-webkit-keyframes wobble-in {
	0% {
		transform: rotate(25deg) translate(120%, -50%) scale(0.1);
	}
	20% {
		transform: rotate(25deg) translate(120%, -50%) scale(1.2);
	}
	40% {
		transform: rotate(25deg) translate(120%, -50%) scale(0.9);
	}
	60% {
		transform: rotate(25deg) translate(120%, -50%) scale(1.05);
	}
	80% {
		transform: rotate(25deg) translate(120%, -50%) scale(0.96);
	}
	100% {
		transform: rotate(25deg) translate(120%, -50%) scale(1);
	}
}

@keyframes wobble-in {
	0% {
		transform: rotate(25deg) translate(120%, -50%) scale(0.1);
	}
	20% {
		transform: rotate(25deg) translate(120%, -50%) scale(1.2);
	}
	40% {
		transform: rotate(25deg) translate(120%, -50%) scale(0.9);
	}
	60% {
		transform: rotate(25deg) translate(120%, -50%) scale(1.05);
	}
	80% {
		transform: rotate(25deg) translate(120%, -50%) scale(0.96);
	}
	100% {
		transform: rotate(25deg) translate(120%, -50%) scale(1);
	}
}
@-webkit-keyframes enter {
	0% {
		opacity: 0;
		transform: rotate(-360deg) scale(0.1);
	}
	100% {
		opacity: 1;
		transform: rotate(-25deg) scale(1);
	}
}
@keyframes enter {
	0% {
		opacity: 0;
		transform: rotate(-360deg) scale(0.1);
	}
	100% {
		opacity: 1;
		transform: rotate(-25deg) scale(1);
	}
}
@-webkit-keyframes exit {
	0% {
		transform: rotate(-25deg) scale(1);
	}
	40% {
		opacity: 1;
		transform: rotate(-25deg) scale(1.4);
	}
	100% {
		opacity: 0;
		transform: rotate(-25deg) scale(0);
	}
}
@keyframes exit {
	0% {
		transform: rotate(-25deg) scale(1);
	}
	40% {
		opacity: 1;
		transform: rotate(-25deg) scale(1.4);
	}
	100% {
		opacity: 0;
		transform: rotate(-25deg) scale(0);
	}
}
@-webkit-keyframes dotdotdot {
	0% {
		opacity: 0;
		transform: scale(0.1);
	}
	90%, 100% {
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes dotdotdot {
	0% {
		opacity: 0;
		transform: scale(0.1);
	}
	90%, 100% {
		opacity: 1;
		transform: scale(1);
	}
}
@-webkit-keyframes hovering {
	50% {
		transform: rotate(-25deg) scale(0.96);
	}
}
@keyframes hovering {
	50% {
		transform: rotate(-25deg) scale(0.96);
	}
}
@-webkit-keyframes look-around-you {
	15% {
		transform: translate3d(0, 0, 0);
	}
	30%, 50% {
		transform: translate3d(-20%, -20%, 0);
	}
	60% {
		transform: translate3d(20%, 20%, 0);
	}
	90%, 100% {
		transform: translate3d(15%, 15%, 0);
	}
}
@keyframes look-around-you {
	15% {
		transform: translate3d(0, 0, 0);
	}
	30%, 50% {
		transform: translate3d(-20%, -20%, 0);
	}
	60% {
		transform: translate3d(20%, 20%, 0);
	}
	90%, 100% {
		transform: translate3d(15%, 15%, 0);
	}
}
@-webkit-keyframes shimmer {
	50% {
		transform: translate(5%, 10%);
	}
}
@keyframes shimmer {
	50% {
		transform: translate(5%, 10%);
	}
}
</style>