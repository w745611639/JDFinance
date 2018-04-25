<template>
	<Panel :class="$style.panel">
		<div :class="$style.content">
			<img src="//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320">		
		</div>
	</Panel>	
</template>


<script>
import Panel from '../core/panel.vue';
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
	margin-top: 120px;
	margin-bottom: 0;
	>h4 {
		display: none;
	}
	.content {
		img {
			width: 100%;
		}
	}
}
	
</style>

