<template>
	<Panel :class="$style.panel" title="In货推荐">
		<div :class="$style.content">
			<div :class="$style.item" v-for="item in items" :key="item.catory">
				<img :src="item.catory">
				<div :class="$style.list">
					<div :class="$style.product" v-for="product in item.list" :key="product.src">
						<img :src="product.img">
						<p :class="$style.title">{{product.title}}</p>
						<p :class="$style.price"><em>{{product.price}}</em>起</p>
						<div :class="$style.pro">
							<div :class="$style.wrap">
								<div :class="$style.inner" :style="{'width': product.pro + '%'}"></div>
							</div>
							<div>{{product.pro}}%</div>
						</div>
						<div :class="$style.tag" v-if="product.tag">精选</div>
					</div>				
				</div>
			</div>
		</div>
	</Panel>
</template>


<script>
import Panel  from '../core/panel.vue';
import Slide from '../core/slide.vue';
	export default {
		components: {
			Panel
		},
		data () {
			return {
				items: [{
					catory: '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
					list: [{
						img: '//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
						title: '双响炮蓝牙音箱',
						price: '29.00',
						pro: '172',
						tag: true
					},{
						img: '//img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
						title: '脑波相机',
						price: '998.00',
						pro: '259',
						tag: true
					}]
				}, {
					catory: '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
					list: [{
						img: '//img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
						title: '智能电动牙刷',
						price: '19.00',
						pro: '481',
						tag: true
					},{
						img: '//img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
						title: '烟草加热电子烟',
						price: '258.00',
						pro: '105',
						tag: true
					}]
				}, {
					catory: '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
					list: [{
						img: '//img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
						title: '赖公高淮封藏老酒',
						price: '99.00',
						pro: '199',
						tag: true
					},{
						img: '//img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
						title: '泗洪花雕醉蟹',
						price: '58.00',
						pro: '222',
						tag: true
					}]
				},]
			}
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
			margin-bottom: 40px;
			>img {
				display: block;
				width: 100%;
				height: 170px;
			}
			.list {
				@include list(row);
				.product {
					position: relative;
					width: 50%;
					height: 398px;
					box-sizing: border-box;
					text-align: center;
					background: rgba(0, 0, 0, 0.02);
					img {
						display: block;
						width: 180px;
						height: 180px;
						margin: 44px auto 20px;
					}
					.title {
						font-size: 28px;
						line-height: 48px;
						font-family: PingFangSC-Regular;
					}
					.price {
						margin-bottom: 20px;
						font-size: 24px;
						color: #999;
						font-family: PingFangSC-Regular;
						em {
							color: red;
							font-size: 36px;
							margin-right: 4px;
							&:before {
								content: '￥';
								font-size: 28px;
							}
						}
					}
					.pro  {
						@include list(row);
						box-sizing: border-box;
						padding: 0 20px;
						margin-bottom: 20px;
						justify-content: space-around;
						align-items: center;
						font-size: 24px;
						color: #999;
						.wrap {
							width: 144px;
							height: 10px;
							border-radius: 4px;
							background: #eee;
							.inner {
								max-width: 100%;
								height: 100%;
								background-color: red;
							}
						}	
					}
					.tag {
						position: absolute;
						left: 0;
						top: 0;
						padding: 4px 8px;
						color: red;
						background: #eee;
						font-size: 24px;
					}
				}
			}
		}
	}
}
	
</style>

