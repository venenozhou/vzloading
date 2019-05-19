import kdLoding from './loading';
import Vue from 'vue';
let instance = null;

export default {
	install (vue, options) {
		let loadingMethods = {
			show (pram) {
				let KdLodingComponet = vue.extend(kdLoding);
				instance = new KdLodingComponet({
					el: document.createElement('div')
				});
				if (pram && pram.target) {
					pram.target.style.position = 'relative';
					pram.target.appendChild(instance.$el);
				}else {
					//没有传dom元素loaidng默认加到boay中
					document.body.appendChild(instance.$el);
				}
				if (pram && pram.type) {
					instance.type = pram.type;
				}
				if (pram && pram.contant) {
					instance.text = pram.contant;
				}
				console.log(instance);
				instance.isShow = true;
				return instance;
			}
		};

		if (!vue.$kdLoading) {
			vue.$kdLoading = loadingMethods;
			Vue.prototype.$kdLoading = vue.$kdLoading;
		}else {
			console.log('$kdLoading方法已占用');
		}
	}
	
};