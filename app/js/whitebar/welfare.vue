<template>
	<Panel :class="$style.panel" title="白条福利">
		<div :class="$style.content">
			<div :class="$style.item">
				<div :class="$style.check">
					立即查看
				</div>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120">
				<div :class="$style.info">
					<p>开通白条</p>
					<p>送百元礼包</p>
				</div>
			</div>
			<div :class="$style.item">
				<div :class="$style.check">
					去提额
				</div>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120">
				<div :class="$style.info">
					<p>白条提额</p>
					<p>金融app专享提额礼包</p>
				</div>
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
		@include list;
		.item {
			height: 140px;
			border-top: 1px solid #ddd;
			font-size: 0;
			.check {
				float: right;
				height: 88px;
				margin: 24px 32px 0 0;
				padding-right: 36px;
				line-height: 88px;
				font-size: 28px;
				color: #FF801A;
				background: url('//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png') right center no-repeat;
			}
			img {
				width: 88px;
				height: 88px;
				margin: 24px 32px 0;
			}
			.info {
				display: inline-block;
				max-width: 35%;
				p {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					&:first-child {
						color: #333;
						font-size: 32px;
						line-height: 1.8;
					}
					&:last-child {
						color: #999;
						font-size: 24px;
						line-height: 1.1;
					}
				}
			}
		}
	}
}

 	
</style>

