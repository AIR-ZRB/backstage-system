<template>
  <div class="login-container">
      <div class="login-box">
			<h1>Login</h1>
			
			<!-- 输入框 -->
			<div method="post" class="login-input">
				<p>
					<label for="username">
						<img src="../assets/icons/username.png" alt="">
					</label>
					<input type="text" name="username" placeholder="username" v-model="userName">
				</p>
				<p>
					<label for="password">
						<img src="../assets/icons/password.png" alt="">
					</label>
					<input type="password" name="password" placeholder="password" v-model="passWord">
				</p>
			</div>
			
			<!-- 登<strong></strong>录按钮 -->
			<div class="login-button">
				<button @click="login">Submit</button>
			</div>
      </div> 
	
  </div>
</template>

<script>
export default {
	data(){
		return {
			userName: "",
			passWord: ""
		}
	},
	methods: {
		login(){
			this.axios.post("http://localhost:3000/login",{
				username: this.userName,
				password: this.passWord				
			})
			.then((data)=>{
				if(data.data) {
					window.sessionStorage.setItem("token",data.data);
					this.$router.push("/index");
				}else {
					this.$message.error('账号或者密码错误');
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.login-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(../assets/picture/login_background.jpg);
	background-size: 100% 100%;
	
  .login-box {
    width: 400px;
    height: 400px;
    background: rgba(0,0,0,.8);
	border-radius: 20px;
	padding: 20px;
	
	
	
	h1 {
		color: #fff;
		text-align: center;
		font-size: 46px;
	}
	
	// 页面的输入框
	.login-input {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 50px;
		
		p {
			// width: 100%;
			display: flex;
			align-items: center;
			height: 70px;
		}
		
		img {
			widows: 40px;
			height: 40px;
			margin-right: 10px;
		}
		input {
			border: 0;
			width: 80%;
			height: 40px;
			font-size: 24px;
			padding: 0 10px;
			border-bottom: 1px solid #fff;
			background: transparent;
			color: #fff;
			outline: none;
		}
	}
	
	// 提交按钮
	.login-button {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 50px;
		button {
			width: 40%;
			height: 50px;
			border: 0;
			border-radius: 25px;
			background-image: linear-gradient(to right,#CCFBFF,#EF96C5);
			outline: none;
			cursor: pointer;
			font-size: 24px;
			font-weight: 700;
			color: #fff;
		}
	}
	
  }

}
</style>