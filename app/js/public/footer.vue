<template>
	<Panel :class="$style.panel">
		<div :class="$style.content">
			<ul>
				<li>
					<img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252">
				</li>
				<li>
					<div>
						<img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108">
						<p>客服端</p>
					</div>
					<div>
						<img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108">
						<p>触屏版</p>
					</div>
					<div>
						<img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108">
						<p>电脑版</p>
					</div>
				</li>
				<li>Copyright © 2004-2018 京东JD.com 版权所有</li>
				<li>投资有风险，购买需谨慎</li>
				<li>京东金融平台服务协议</li>
				<li>京东金融隐私政策</li>
			</ul>
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
	margin-bottom: 100px;
	>h4 {
		display: none;
	}
	.content {
		background-color: #F5F5F5;
	}
	ul {
		@include flex;
		li {
			&:first-child {
				img {
					width: 100%;
					height: 143px;
				}
			}
			&:nth-child(2) {
				@include flex(row);
				height: 182px;
				box-sizing: border-box;
				padding-top: 40px;
				margin-bottom: 20px;
				div {
					width: 33.3333%;
					text-align: center;
					img {
						width: 90px;
						height: 90px;
					}
					p {
						font-size: 26px;
					    text-align: center;
					    display: block;
					    color: #999;
					    margin-top: 12px;
					    white-space: nowrap;
					    text-overflow: ellipsis;
					    overflow: hidden;
					}
				}
			}

			&:nth-child(n + 3) {
				padding: 24px 32px;
				border-top: 1px solid #ddd;
				font-size: 24px;
				color: #999;
				box-sizing: border-box;
				line-height: 1.6;
				text-align: center;
			}
		}
	}

}
	
</style>

