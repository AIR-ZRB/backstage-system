<template>
    <div
        class="create-user-component"
        @click="userEvent"
        v-show="newUserIsShow"
    >
        <div class="create-user-box">
            <h3>New User</h3>

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名字">
                    <el-input v-model.trim="form.username"></el-input>
                </el-form-item>
                <el-form-item label="用户密码">
                    <el-input
                        type="password"
                        v-model.trim="form.password"
                    ></el-input>
                </el-form-item>

                <el-form-item label="用户权限">
                    <el-checkbox-group v-model="form.jurisdiction">
                        <el-checkbox label="读取文件" name="type"></el-checkbox>
                        <el-checkbox label="修改文件" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>

                <el-form-item>
                    <el-button class="user-submit-button">立即创建</el-button>
                    <el-button class="user-cancel-button">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    props: ["newUserIsShow"],
    data() {
        return {
            username: "",
            form: {
                username: "",
                password: "",
                jurisdiction: ["读取文件"],
            },
        };
    },
    methods: {
        userEvent(event) {
            const getClassName = event.target.className;

            getClassName.search("user-cancel-button") > 0 && this.cancel();
            getClassName.search("user-submit-button") > 0 && this.submit();
            getClassName === "create-user-component" && this.cancel();
        },
        cancel() {
            this.form.username = "";
            this.form.password = "";
            this.form.jurisdiction = ["读取文件"];
            this.$emit("update:newUserIsShow", false);
        },
       async submit() {
            // 表单验证
            if (this.form.username === "") {
                this.$message.error("用户名不能为空");
                return;
            }else if (this.form.password === "" || this.form.password.length <= 5) {
                this.$message.error("密码至少6位");
                return;
            }

            const returnMessage = await this.axios.post("/newUser", {
                username: this.form.username,
                password: this.form.password,
                jurisdiction: this.form.jurisdiction,
            });
           
            returnMessage.data && this.$message.success("用户创建成功");
            returnMessage.data || this.$message.error("用户创建失败，请重试");
            this.cancel();
        },
    },
};
</script>

<style lang="scss">
.create-user-component {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    .create-user-box {
        width: 350px;
        padding: 10px;
        border-radius: 20px;
        background: #fff;
        // border: 1px solid #000;

        h3 {
            text-align: center;
            margin-bottom: 20px;
            position: relative;
        }

        .el-button {
            background: var(--theme-color);
            color: var(--theme-text-color);

            &:last-child {
                background: var(--theme-danger);
            }
        }
    }
}
</style>
