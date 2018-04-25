<template lang="html">
	<div>
		<jd-header></jd-header>	
		<home-slide></home-slide>
		<Novice></Novice>
		<Borrow></Borrow>
		<Money></Money>
		<Product></Product>
		<Rich></Rich>
		<Service></Service>
		<jd-footer></jd-footer>
		<Navbar></Navbar>
	</div>
	
</template>

<script>

import jdHeader from '../public/header.vue';
import jdFooter from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import homeSlide from './homeslide.vue';
import Novice from './novice.vue';
import Borrow from './borrow.vue';
import Money from './money.vue';
import Product from './newproduct.vue';
import Rich from './rich.vue';
import Service from './service.vue';
export default {
	components: {
		jdHeader,
		jdFooter,
		Navbar,
		homeSlide,
		Novice,
		Borrow,
		Money,
		Product,
		Rich,
		Service
	},
	data () {
		return {}
	}
}
</script>

<style lang="scss">
</style>
