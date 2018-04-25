<template>
	<Panel :class="$style.panel" title="理财精选">
		<section :class="$style.content">
			<div :class="$style.item">
				<div :class="$style.earn">去赚钱</div>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76">
				<div :class="$style.info">
					<p>季度理财</p>
					<p :class="$style.red">预期年化收益率5.50%</p>
				</div>			
			</div>
			<div :class="$style.item">
				<div :class="$style.earn">去赚钱</div>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76">
				<div :class="$style.info">
					<p>月度理财</p>
					<p :class="$style.red">预期年化收益率4.50%</p>
				</div>			
			</div>
			<div :class="$style.item">
				<div :class="$style.earn">去赚钱</div>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76">
				<div :class="$style.info">
					<p>一年理财</p>
					<p :class="$style.red">预期年化收益率5.80%</p>
				</div>			
			</div>
		</section>
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
		@include list;
		.item {
			height: 140px;
			border-top: 1px solid #ddd;
			.earn {
				float: right;
				height: 88px;
				padding: 0 36px 0 20px;
				margin: 24px 32px 0 0;
				line-height: 88px;
				font-size: 28px;
				color: #FF801A;
				background: url('//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png') no-repeat right center;
			}
			img {
				width: 88px;
				height: 88px;
				margin: 24px 32px 0;
			}
			.info {
				display: inline-block;
				max-width: 35%;
				color: #333;
				font-size: 32px;
				line-height: 1.8;
				.red {
					color: red;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					font-size: 24px;
					line-height: 1.1;
				}
			}
		}
	}
}
	
</style>

