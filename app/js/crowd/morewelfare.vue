<template>
	<Panel :class="$style.panel" title="更多福利">
		<div :class="$style.content">
			<div :class="$style.more">专享福利 ></div>
			<div :class="$style.item">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330">
			</div>
			<div :class="$style.item">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330">
			</div>
			<div :class="$style.item">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330">
			</div>
		</div>
	</Panel>
</template>


<script>
import Panel from '../core/panel.vue';
	export default {
		components: {
			Panel
		}
	}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel {
	@include panel;
	.content {
		position: relative;
		@include list(row);
		padding-bottom: 40px;
		.more {
			position: absolute;
			right: 20px;
			top: -70px;
			font-size: 28px;
			color: #999;
		}
		.item {
			width: 33.33%;
			img {
				width: 100%;
				height: 280px;
			}
		}
	}
}
	
</style>


