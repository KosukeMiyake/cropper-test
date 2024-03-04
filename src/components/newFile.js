import { saveAs } from 'file-saver';

export default (await import('vue')).defineComponent({
components: {
ExampleWrapper,
Cropper,
},
data() {
return {
image: 'https://images.pexels.com/photos/580012/pexels-photo-580012.jpeg',
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
console.log(blob);
saveAs(blob);
});
},
},
});
