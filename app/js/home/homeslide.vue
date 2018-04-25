<template>
	<article>
		<Slide :items="items" :cname="$style.slide"></Slide>
		<section :class="$style.list">
			<div :class="$style.item" v-for="list in lists" :key="list.src">
				<router-link :to="{name: list.href}">
					<img :src="list.src">
					<p>{{list.title}}</p>
				</router-link>
			</div>		
		</section>
	</article>
</template>


<script>
import Slide from '../core/slide.vue';
export default {
	components: {
		Slide
	},
	data () {
		return {
			items: [{
				href: 'home',
				src: '//img12.360buyimg.com/jrpmobile/jfs/t17743/102/1419735038/76755/d0974387/5ac97f30N0b690c0c.jpg?width=750&height=320'
			},{
				href: 'home',
				src: '//img12.360buyimg.com/jrpmobile/jfs/t18355/346/1587541595/49586/2b2a1bd7/5ad0a175Nb329de3b.jpg?width=750&height=320'
			},{
				href: 'home',
				src: '//img12.360buyimg.com/jrpmobile/jfs/t18691/338/1637719014/51064/40f8d19b/5ad08f13N8d5a6935.jpg?width=750&height=320'
			},{
				href: 'home',
				src: '//img12.360buyimg.com/jrpmobile/jfs/t17782/57/1627559732/37099/85051881/5ad08f78Ne8c47ca1.png?width=750&height=320ight=320'
			}],
			lists: [{
				href: 'home',
				src: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
				title: '优惠券'
			},{
				href: 'home',
				src: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
				title: '领红包'
			},{
				href: 'home',
				src: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
				title: '抢钢镚'
			},{
				href: 'home',
				src: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
				title: '白条提额'
			}]
		}
	}
}
</script>

<style lang="scss" module>
	@import '../../css/element.scss';
	.slide {
		margin-top: 120px;
		background-color: #fff;
		img {
			width: 100%;
		}
	}
	.list {
		@include list('row');
		padding-top: 40px;
		margin-bottom: 20px;
		background-color: #fff;
		justify-content: space-between;
		.item {
			text-align: center;
			flex-grow: 1;
			a {
				text-decoration: none;
			}
			img {
				width: 90px;
				height:  90px;
			}
			p {
				margin: 12px 0 8px;
				font-size: 26px;
				color: #666;
			}
		}
	}
	
</style>

