组件注册的时候，如果用驼峰命名则不需要加引号，否则要加 比如 appHeader:Header 相当于  'app-header':Header
使用{
		path:'*',redirect:'/'
	}
可以在路径输入错误的时候跳到指定路径

路由跳转：
跳转到上一次浏览的界面
this.$router.go(-1)
				
跳到指定地址
this.$router.replace('/menu')
				
跳转到指定的路由的名字下
this.$router.replace({name:'menulink'})
				
通过push跳转
this.$router.push('/menu')
this.$router.push({name:'menulink'})