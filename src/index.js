
import { IMG_URL } from './const'
import loadImg from './utils/loadImg'

loadImg(IMG_URL).then(img => {
	console.log(img.width)
	document.querySelector('#app').appendChild(img)
	return img
}).then(img => {
	console.log(img.height)
	return img
}).catch(e => {
	console.log(e)
})

