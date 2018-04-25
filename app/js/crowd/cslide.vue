<template>
	<Panel :class="$style.panel">
		<div :class="$style.content">
			<swiper :options="options">
				<swiperSlide>百万白条券免费送，速来领取!! <em>></em></swiperSlide>
				<swiperSlide>签到领流量,1元500M <em>></em></swiperSlide>
			</swiper>
		</div>
		
	</Panel>
</template>


<script>
import Panel from '../core/panel.vue';
import {swiper, swiperSlide} from 'vue-awesome-swiper';
	export default {
		components: {
			Panel,
			swiper,
			swiperSlide
		},
		data () {
			return {
				options: {
					autoplay: true,
					loop: true,
					direction: 'vertical'
				}
			}
		}
	}
</script>
<style lang="scss">

.swiper-container-vertical {
	height: 72px;
}
	.swiper-slide {
		height: 72px;
		font-size: 26px;
		color: #333;
		em {
			float: right;
			margin-right: 20px;
			color: #999;
		}
	}
</style>
<style lang="scss" module>
@import '../../css/element.scss';
.panel {
	@include panel;
	margin-top: 120px;
	>h4 {
		display: none;
	}
	.content {
		height: 72px;
		line-height: 72px;
		overflow: hidden;
		padding-left: 178px;
		background: url('//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png') no-repeat left center;
		background-size: auto 100%;
	}
}
	
</style>

