
<template>
<div class="hoge">
	<cropper
		src="https://images.pexels.com/photos/580012/pexels-photo-580012.jpeg"
		ref="cropper"
	/>
	<button @click="crop">
		Crop
	</button>
</div>
</template>

<script>
/* eslint-disable */
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

export default {
	components: {
		Cropper,
	},
	data() {
		return {
			coordinates: {
				width: 0,
				height: 0,
				left: 0,
				top: 0,
			},
			image: null,
		};
	},
	methods: {
		crop() {
			const { coordinates, canvas, } = this.$refs.cropper.getResult();
			this.coordinates = coordinates;
			// You able to do different manipulations at a canvas
			// but there we just get a cropped image, that can be used 
			// as src for <img/> to preview result
			this.image = canvas.toDataURL();
      console.log(this.$refs.cropper.getResult().coordinates);
		},
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hoge {
  width: 800px;
  height: 800px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
