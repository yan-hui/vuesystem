<template>
    <div>
        <h1>Home</h1>
        <button class="btn btn-success" @click="goToMenu">Let's order!</button>
    </div>
</template>

<script>
    export default {
        methods: {
            goToMenu() {
                //跳转到上一次浏览的界面
                // this.$router.go(-1)
				
				//跳到指定地址
				// this.$router.replace('/menu')
				
				//跳转到指定的路由的名字下
				// this.$router.replace({name:'menulink'})
				
				//通过push跳转
				// this.$router.push('/menu')
				this.$router.push({name:'menulink'})
            }
        }
    }
</script>

<style scoped>

</style>
