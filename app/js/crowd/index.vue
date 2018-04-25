<template>
	<div>
		<jd-header></jd-header>
		<Cslide></Cslide>
		<Sign></Sign>
		<Recommend></Recommend>
		<More-welfare></More-welfare>
		<jd-footer :class="$style.footer"></jd-footer>
		<Navbar></Navbar>
	</div>
</template>


<script>
import jdHeader from '../public/header.vue';
import jdFooter from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Cslide from './cslide.vue';
import Sign from './sign.vue';
import Recommend from './recommend.vue';
import MoreWelfare from './morewelfare.vue';
	export default {
		components: {
			jdHeader,
			jdFooter,
			Navbar,
			Cslide,
			Sign,
			Recommend,
			MoreWelfare
		}
	}
</script>

<style lang="scss" module>
.footer {
	ul {
		li{
			&:first-child {
				display: none;
			}
		}
	}
}
	
</style>

