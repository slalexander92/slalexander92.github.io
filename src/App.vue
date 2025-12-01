<template>
	<header>
	</header>

	<main>
		<div :class="$style.wrapper">
			<div :class="$style.imageWrapper">
				<img :class="$style.image" src="./assets/me.jpeg" alt="" fetchpriority="high">
			</div>

			<h1>hi, I'm spencer</h1>
			<h2>I'm a Software Developer</h2>

			<div :class="$style.iconRow">
				<a :class="$style.iconWrapper" href="https://github.com/slalexander92" aria-label="github link">
					<img :class="$style.icon" src="./assets/github.svg" alt="github logo">
				</a>
				<a :class="$style.iconWrapper" href="/spencer-resume.pdf" target="_blank" aria-label="resume download link" download>
					<img :class="$style.icon" src="./assets/cv.svg" alt="">
				</a>
				<a :class="$style.iconWrapper" href="https://www.linkedin.com/in/spencer-alexander-8a888757" aria-label="linkedin link">
					<img :class="$style.icon" src="./assets/linkedin.svg" alt="linkedin logo">
				</a>
			</div>
		</div>
	</main>
</template>

<script setup>

</script>


<style lang='scss' module>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

	body {
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
		height: 100vh;
		overflow: hidden;
	}

	* {
		font-family: Noto Sans, sans-serif;
	}

	h1, h2 {
		margin-bottom: 0;
		color: white;
	}

	h1 {
		text-transform: capitalize;
		letter-spacing: 3px;
		margin-top: 24px;
	}

	h2 {
		margin-top: 0;
		margin-bottom: 24px;
		letter-spacing: 2px;
	}

	.iconRow {
		display: flex;
	}

	.iconWrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 16px;
		border-radius: 100em;
		background-color: black;

		&:not(:last-of-type) {
			margin-right: 16px;
		}
	}

	.wrapper {
		width: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.imageWrapper {
		width: 100px;
		height: 100px;
		border-radius: 100em;
		overflow: hidden;
		display: flex;
		justify-content: center;
		border: 2px white solid;
	}

	.icon {
		width: 32px;
		height: 32px;
		fill: white;
	}

	.image {
		width: 100%;
		object-fit: cover;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.25em;
			letter-spacing: 0;
			text-align: center;
		}

		h2 {
			font-size: 1em;
			text-align: center;
		}

		.icon {
			width: 24px;
			height: 24px;
		}
	}
</style>
