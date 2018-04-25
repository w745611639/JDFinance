<template>
	<div>
		<jd-header></jd-header>
		<Banner></Banner>
		<Welfare></Welfare>
		<Activity></Activity>
		<Service></Service>
		<jd-footer></jd-footer>
		<Navbar></Navbar>
	</div>
</template>


<script>
import jdHeader from '../public/header.vue';
import jdFooter from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Banner from './banner.vue';
import Welfare from './welfare.vue';
import Activity from './activity.vue';
import Service from './service.vue';

	export default {
		components: {
			jdHeader,
			jdFooter,
			Navbar,
			Banner,
			Welfare,
			Activity,
			Service
		}
	}
</script>

<style>
	
	
</style>

