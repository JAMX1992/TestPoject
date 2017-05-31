<template>
	<div>
		<h1 class="logo">cnodejs Api Test</h1>
		<ul class="list">
			<li v-for="item in lists" v-html="item.content"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				lists: []
			}
		},
		created() {
			this.get_data()
		},
		methods: {
			get_data(params) {
				var v = this;
				if (!params) {
					v.$api.get('topics', params, (r) => {
						console.log(r.data)
						v.lists = r.data
					})
				}
			}
		}
	}
</script>