
<template>
	<Panel :class="$style.panel" title="每日签到">
		<div :class="$style.content">		
			<div :class="$style.grab">不抢白不抢</div>
			<div :class="$style.item">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160">
			</div>
			<div :class="$style.item">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160">
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
		@include list(row);		
		position: relative;
		.grab {
			position: absolute;
			right: 20px;
			top: -70px;			
			color: #999;
			font-size: 28px;
		}
		.item {
			width: 50%;			
			img {
				width: 100%;
			}
		}

	}
}

</style>