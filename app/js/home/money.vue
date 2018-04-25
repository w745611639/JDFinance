<template>
	<Panel title="理财精选" :class="$style.panel">
		<div :class="$style.content">
			<dl :class="$style.item" v-for="item in items" :key="item.title">
				<dt>{{item.title}}<span>{{item.sub}}</span></dt>
				<dd>{{item.rate}}</dd>
				<dd>{{item.text}}</dd>
			</dl>
		</div>
	</Panel>
</template>


<script>
import Panel from '../core/panel.vue';
	export default {
		components: {
			Panel
		},
		data () {
			return {
				items: [{
					title: '定期理财',
					sub: '90天可质押',
					rate: '5.50%',
					text: '历史年化计算利率'
				},{
					title: '年年盈',
					sub: '理财推荐',
					rate: '5.80%',
					text: '综合年化收益率'
				},{
					title: '基智账户',
					sub: '组合投资',
					rate: '8%-10%',
					text: '止盈年化收益率'
				},{
					title: '小白基金',
					sub: '超短期',
					rate: '5.00%',
					text: '7日年化收益率'
				}]
			}
		}
	}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel {
	@include panel;
	.content {
		@include list(row);
		&:after {
			content: '';
			display: block;
			position: relative;
			top: -204px;
			width: 100%;
			border-bottom: 1px solid #ddd;
		}
		.item {
			position: relative;			
			width: 50%;
			padding: 34px 0 34px 32px;
			box-sizing: border-box;
			&:nth-child(2n + 1):after {
				content: '';
				position: absolute;
				right: 0;
				top: 50%;
				height: 132px;
				margin-top: -66px;
				border-right: 1px solid #ddd;
			}
			dt {
				height: 42px;
				line-height: 42px;
				font-size: 30px;
				font-weight: 700;
				span {
					display: inline-block;
					height: 30px;
					line-height: 30px;
					padding: 0 8px;
					margin-left: 6px;
					color: #FF5155;
					border-width: 1px;
					border-style: solid;
					font-size: 22px;
					vertical-align: 1px;
				}
			}
			dd:nth-child(2) {
				margin-top: 10px;
				margin-bottom: 4px;
				height: 56px;
				line-height: 56px;
				font-weight: bold;
				font-size: 42px;
				color: #FF5155;
			}
			dd:last-child {
				color: #999;
				font-size: 24px;
			}
		}
	}
}
	
</style>

