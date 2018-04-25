<template>
	<div>
		<jd-header></jd-header>
		<money-slide></money-slide>
		<Card></Card>
		<Money></Money>
		<Banner></Banner>
		<Manager></Manager>
		<jd-footer :class="$style.footer"></jd-footer>
		<Navbar></Navbar>
	</div>
</template>


<script>
import jdHeader from '../public/header.vue';
import jdFooter from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import moneySlide from './moneyslide.vue';
import Card from './card.vue';
import Money from '../home/money.vue';
import Banner from './banner.vue';
import Manager from './manager.vue';
	export default {
		components: {
			jdHeader,
			jdFooter,
			Navbar,
			moneySlide,
			Card,
			Money,
			Banner,
			Manager
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

