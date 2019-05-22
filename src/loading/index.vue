<template>
	<div class="kd-loading" v-if="isShow">
		<div class="type1 type" v-if="type=='type1'">
			<div class="line line1"></div>
			<div class="line line2"></div>
			<div class="line line3"></div>
			<div class="text">{{text}}</div>
		</div>
		<div class="type2 type" v-if="type=='type2'">
			<div class="k-line k-line1-1"></div>
			<div class="k-line k-line1-2"></div>
			<div class="k-line k-line1-3"></div>
			<div class="text">{{text}}</div>
		</div>
		<div class="type3 type"  v-if="type=='type3'">
			<div class="text">{{text}}</div>
			<div class="horizontal">
				<div class="circlesup">
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
				</div>
				<div class="circlesdwn">
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
				</div>
			</div>
			<div class="vertical">
				<div class="circlesup">
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
				</div>
				<div class="circlesdwn">
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
	export default {
		components: {
			
		},
		data () {
			return {
				isShow: false,
				type: 'type2',
				text: 'loading...'
			};
		},
		props: {
			
		},
		methods: {
			hide () {
				this.isShow = false;
			}
		}
	};
</script>
