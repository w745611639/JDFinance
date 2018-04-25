<template>
	<Panel :class="$style.panel" title="众筹新品">
		<div :class="$style.content">
			<div :class="$style.arrow">更多尖货 ></div>
			<Slide :options="options" :items="items">
			</Slide>	
		</div>
	</Panel>	
</template>


<script>
import Panel from '../core/panel.vue';
import Slide from '../core/slide.vue';
	export default {
		components: {
			Panel,
			Slide
		},
		data () {
			return {
				items: [{
					href: 'home',
					src: '//img12.360buyimg.com/jrpmobile/jfs/t17692/108/1667948905/47352/b3b5fec5/5ad4077bN829fc64d.jpg?width=335&height=421'
				},{
					href: 'home',
					src: '//img12.360buyimg.com/jrpmobile/jfs/t17017/315/1681990516/35892/46d5d0e/5ad40797Nd8624d82.jpg?width=335&height=421'
				},{
					href: 'home',
					src: '//img12.360buyimg.com/jrpmobile/jfs/t17977/1/1701720589/44385/219809f6/5ad407a8N8feeb421.jpg?width=335&height=421'
				},{
					href: 'home',
					src: '//img12.360buyimg.com/jrpmobile/jfs/t18598/49/1683491486/34072/cb622afa/5ad407b7N95527875.jpg?width=335&height=421'
				}],
				options: {
		          slidesPerView: 2.3,
		          spaceBetween: 30,
		          freeMode: true,
		          pagination: {
		            // el: '.swiper-pagination',
		            clickable: true
        		  }
				}
			}
		}
	}
</script>
<style lang="scss">
	.swiper-slide {
		a {
			display: block;
			img {
				display: block;
				width: 100%;
			}
		}
	}
</style>
<style lang="scss" module>
@import '../../css/element.scss';
.panel {
	@include panel;
	position: relative;
	margin-bottom: 0;
	padding: 0 20px;
	.arrow {
		position: absolute;
		right: 24px;
		top: 40px;
		font-size: 28px;
		color: #999;
	}
}
</style>

