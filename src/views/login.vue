<template>
    <div class="login-container">
        <div class="login-box">
            <h1>Welcome</h1>

            <!-- 输入框 -->
            <div method="post" class="login-input">
                <p>Email</p>
                <input type="text" v-model="userName" />

                <p>Password</p>
                <input
                    type="password"
                    v-model="passWord"
                    @keydown.enter="login"
                />
            </div>

            <!-- 登录按钮 -->
            <div class="login-button">
                <a href="https://github.com/AIR-ZRB/backstage-system">前往Github</a>
                <button @click="login">Sign In</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "",
            passWord: "",
        };
    },
    methods: {
        async login() {
            const data = await this.axios.post("/login", {
                username: this.userName,
                password: this.passWord,
            });

            if (data.data) {
                window.sessionStorage.setItem("token", data.data);
                this.$router.push("/home");
                this.$message.success("登录成功");
            } else {
                this.$message.error("账号或者密码错误");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100%;

    @include flex-layout(center, center);
    background-image: url(../assets/picture/login_background.jpg);
    background-size: 100% 100%;

    .login-box {
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.1);
        padding: 20px 30px;
        width: 30%;

        h1 {
            color: #fff;
            // text-align: center;
            font-size: 40px;
        }

        // 页面的输入框
        .login-input {
            // width: 40%;
            @include flex-layout(none, center, wrap);
            margin-top: 30px;

            p {
                width: 100%;
                font-weight: 700;
                color: #fff;
                @include flex-layout(none, center);
                // margin-top: 10px;
            }

            img {
                widows: 40px;
                height: 40px;
                margin-right: 10px;
            }
            input {
                border: 0;
                width: 100%;
                height: 40px;
                font-size: 20px;
                // padding: 0 10px;
                margin: 0 0 20px 0;
                border-bottom: 1px solid #fff;
                background: transparent;
                color: #fff;
                outline: none;
            }
        }

        // 提交按钮
        .login-button {
            width: 100%;
            margin-top: 30px;
            @include flex-layout(space-between, center);

			a {
				color: #fff;
			}

            button {
                border: 0;
                outline: none;
                cursor: pointer;
                font-size: 18px;
                font-weight: 700;
                color: #fff;
                background: transparent;
                padding: 10px 20px;
                border: 1px solid #fff;
                border-radius: 50px;
            }
        }
    }
}
</style>
