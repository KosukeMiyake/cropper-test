

<template>
	<example-wrapper
		class="resize-result-example"
		href="https://github.com/advanced-cropper/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/resize-result-example.vue"
	>
		<cropper
			ref="cropper"
			class="resize-result-cropper"
			:src="image"
			:transitions="false"
			
			:canvas="{
				maxWidth: limitations.maxWidth,
				minWidth: limitations.minWidth,
				height: limitations.height,
				width: limitations.width,
				maxArea: limitations.maxArea,
			}"
		/>
		<div class="panel">
			<div class="panel__left">
				<div class="input">
					<span class="input__label">Max width</span>
					<input v-model="limitations.maxWidth" class="input__control" type="text" />
				</div>
				<div class="input">
					<span class="input__label">Min width</span>
					<input v-model="limitations.minWidth" class="input__control" type="text" />
				</div>
				<div class="input">
					<span class="input__label">Width</span>
					<input v-model="limitations.width" class="input__control" type="text" />
				</div>
				<div class="input">
					<span class="input__label">Height</span>
					<input v-model="limitations.height" class="input__control" type="text" />
				</div>
				<div class="input">
					<span class="input__label">Max area (width × height)</span>
					<input v-model="limitations.maxArea" class="input__control" type="text" />
				</div>
			</div>
			<div class="panel__right">
				<div class="button" @click="showImage()">Crop</div>
				<div class="button" @click="crop()">Download</div>
			</div>
		</div>
	</example-wrapper>
</template>

<script>
/* eslint-disable */
import { Cropper } from 'vue-advanced-cropper';
import ExampleWrapper from './ExampleWrapper';
import { saveAs } from 'file-saver';


export default {
	components: {
		ExampleWrapper,
		Cropper,
	},
	data() {
		return {
			image:
				'https://images.pexels.com/photos/580012/pexels-photo-580012.jpeg',
			limitations: {
				maxWidth: 0,
			},
		};
	},
	methods: {
		showImage() {
			const { coordinates, canvas } = this.$refs.cropper.getResult();
			// console.log(canvas.toDataURL());

			var img = new Image();

			const data = canvas.toDataURL("image/png");			
			// URL を指定して、画像の読み込みを開始する
			img.src = data;
			document.body.appendChild(img);
		},
		crop() {
			const { canvas } = this.$refs.cropper.getResult();
			canvas.toBlob((blob) => {
				// console.log(blob);
				saveAs(blob);
			});
		},
	},
};
</script>

<style lang="scss">
img{
	max-width: 100%;
}
.resize-result-example {
	.panel {
		border: solid 1px #ddd;
		color: black;
		display: flex;
		padding: 20px;
		background: rgb(250, 250, 250);
		&__left {
			width: 100%;
			padding-right: 30px;
		}
		&__right {
			display: flex;
			align-items: stretch;
			flex-direction: column;
		}
	}

	.input {
		margin-bottom: 8px;
		&__control {
			padding: 4px;
			width: 100%;
			color: black;
			font: inherit;
			font-size: 15px;
			border: solid 1px #aaa;
		}
		&__label {
			display: block;
			font-size: 11px;
			margin-bottom: 3px;
		}
	}
	.resize-result-cropper {
		width: 100%;
		max-height: 500px;
		border: solid 1px #eee;
	}

	.button {
		width: 120px;
		margin-top: 15px;
		color: white;
		font-size: 16px;
		padding: 17px 20px;
		text-align: center;
		background: #1f8255;
		cursor: pointer;
		transition: background 0.5s;
		font-weight: normal;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		&:hover {
			background: #26a069;
			text-decoration: none !important;
		}
		input {
			display: none;
		}
	}
}
</style>