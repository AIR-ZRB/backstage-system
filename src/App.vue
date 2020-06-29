<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
	data(){
		return {
			// 后台接口的地址
			address: "http://localhost:3000/"
		}
		
	}
}
</script>

<style lang="scss">

</style>