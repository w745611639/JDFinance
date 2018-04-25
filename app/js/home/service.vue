<template>
	<section :class="$style.service">
		<ul>
			<li v-for="item in items" :key="item.text">
				<img :src="item.src">
				<p>{{item.text}}</p>
			</li>
		</ul>
	</section>
</template>


<script>
	export default {
		data () {
			return {
				items: [{
					src: '//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90',
					text: '旅游'
				},{
					src: '//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
					text: '医美'
				},{
					src: '//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88',
					text: '房抵贷'
				},{
					src: '//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
					text: '驾校'
				},{
					src: '//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
					text: '分期用'
				},]
			}
		}
	}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.service {
	padding-top: 80px;
	padding-bottom: 12px;
	margin-bottom: 20px;
	background-color: #fff;
	ul {
		@include list(row);
		li {
			width: 20%;
			text-align: center;
			font-size:  26px;
			img {
				width: 90px;
				height: 90px;
			}
			p {
				margin-top: 12px;
				color: #666;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
	
}
	
</style>

