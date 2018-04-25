<template>
	<section :class="$style.navbar">
		<ul>
			<li>
				<router-link :to="{name: 'home'}">
					<img src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66">
					<p>首页</p>
				</router-link>
				
			</li>
			<li>
				<router-link :to="{name: 'money'}">
					<img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66">
					<p>理财</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'whitebar'}">
					<img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66">
					<p>白条</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'crowd'}">
					<img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66">
					<p>众筹</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'home'}">
					<img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66">
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</section>
</template>
<script>
	export default {
	
	}
</script>
<style lang="scss">

li {
	.router-link-exact-active {
		p {
			color: red !important;
		}
	}
}


</style>
<style lang="scss" module>
@import '../../css/element.scss';
.navbar {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 6;
	background-color: #fff;
	ul {
		@include list(row);
		li {
			width: 20%;
			height: 100px;
			box-sizing: border-box;
			padding-top: 12px;
			text-align: center;
			a {
				display: block;
				height: 100%;
				text-decoration: none;
			}
			img {
				width: 44px;
				height: 44px;
			}

			p {
				margin-top: 4px;
				color: #656565;
				font-size: 24px;
			}
		}
	}
}
	
</style>

