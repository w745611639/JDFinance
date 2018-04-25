<template>
	<Panel :class="$style.panel" title="有车有钱">
		<div :class="$style.content">
			<div :class="$style.item">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t18913/125/1245872730/32248/a8bc4ea2/5ac180b5N008bdabb.png?width=375&height=233">
			</div>
			<div :class="$style.item">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233">
			</div>
		</div>
	</Panel>	
</template>


<script>
import Panel from '../core/panel.vue'
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
	margin: 0;
	.content {
		@include list(row);
		.item {
			width: 50%;
			img {
				display: block;
				width: 100%;
				
			}
		}
	}
}
	
</style>

