<template>
	<div :class="$style.header">
		<span :class="$style.left">
			<em>注册</em> | <em>登录</em>	
		</span>
		<header-btn :class="$style.btnDownload">APP下载</header-btn>
	</div>
</template>


<script>
import headerBtn from '../core/btn.vue';
export default {
	components: {
		headerBtn
	},
	data () {
		return {

		}
	}
}
</script>

<style lang="scss" module>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 56px;
		padding: 22px 24px;
		line-height: 56px;
		font-size: 32px;
		color: #666;
		background: #fff url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png") center center no-repeat;
		background-size: auto 50%;
		.left {
			float: left;
			height: 30px;
			margin: 13px 0;
			line-height: 30px;
			font-size: 28px;
		}
		.btn-download {
			float: right;
			min-width: 120px;
			height: 100%;
			border: none;
			padding: 0;
			line-height: 54px;
			font-size: 24px;
			background-color: #F04752;
			color: #fff;
			text-align: center;
			border-radius: 4px;
		}
	}
	
</style>

