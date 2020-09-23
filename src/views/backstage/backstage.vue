<template>
    <el-container class="home-index">
        <el-aside width="auto">
            <img src="@/assets/picture/login_background.jpg" alt="" />
            <!-- 左边侧边栏 -->
            <el-row class="tac">
                <el-col>
                    <el-menu
                        :default-active="defaultActive"
                        class="el-menu-vertical-demo"
                        active-text-color="var(--color-light)"
                        :router="true"
                        :collapse="true"
                    >
                        <navigation
                            v-for="item in menuList"
                            :key="item.path"
                            :item="item"
                        />
                    </el-menu>
                </el-col>
            </el-row>
            <!-- --------- -->
        </el-aside>
        <el-container>
            <el-header>
                <div class="left-menu">
                    <!-- <i class="el-icon-s-unfold"></i> -->
                    <i class="el-icon-position"></i>
                    <p>Dashboard</p>
                </div>

                <div class="right-menu">
                    <img src="@/assets/picture/login_background.jpg" alt="" />
                </div>
            </el-header>
            <div class="history">
                <el-tag closable type="">
                    index
                </el-tag>
            </div>

            <!-- 右边主题内容 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import navigation from "./navigation.vue";
export default {
    data() {
        return {
            defaultActive: "/home/index",
            minimize: true,
            // 列表数据
            menuList: [
                {
                    id: 1,
                    listName: "首页",
                    path: "index",
                    icon: "el-icon-monitor",
                },
                {
                    id: 2,
                    listName: "电商后台",
                    paht: "item-shopping",
                    icon: "el-icon-shopping-cart-1",
                    children: [
                        {
                            id: 21,
                            listName: "主会场",
                            path: `shopping/main-venue`,
                        },
                        {
                            id: 22,
                            listName: "限时秒杀",
                            path: `shopping/second-kill`,
                        },
                        {
                            id: 23,
                            listName: "商品分类",
                            path: `shopping/classify`,
                        },
                        {
                            id: 24,
                            listName: "全部用户",
                            path: `shopping/all-member`,
                        },
                    ],
                },
                {
                    id: 3,
                    listName: "其他",
                    path: "rests",
                    icon: "el-icon-s-fold",
                    children: [
                        {
                            id: 31,
                            listName: "图片",
                            path: `rests/picture`,
                            icon: "el-icon-picture-outline",
                        },
                        {
                            id: 32,
                            listName: "视频",
                            path: `rests/video`,
                            icon: "el-icon-video-camera",
                        },
                        {
                            id: 33,
                            listName: "文档",
                            path: `rests/file`,
                            icon: "el-icon-files",
                        },
                    ],
                },
                {
                    id: 4,
                    listName: "用户",
                    path: "user",
                    icon: "el-icon-user",
                },
                {
                    id: 5,
                    listName: "设置",
                    path: "setting",
                    icon: "el-icon-setting",
                },
            ],
        };
    },
    components: {
        navigation,
    },
    methods: {},
    created() {
        this.defaultActive = this.$route.fullPath;
        console.log(this.$route);
    },
};
</script>

<style lang="scss">
.home-index {
    height: 100%;
}
.el-header {
    @include flex-layout(space-between, center);
    border-bottom: 1px solid #f3f4f5;
    .left-menu {
        @include flex-layout(none, center);
        p {
            font-size: 14px;
            color: #97a8be;
        }
        i {
            font-size: 20px;
            display: inline-block;
            margin-right: 15px;
            &::before {
                color: #97a8be;
            }
        }
    }

    .right-menu {
        img {
            width: 40px;
            height: 40px;
            border-radius: 5px;
        }
    }
}

.history {
    border-bottom: 1px solid #f3f4f5;
    height: 30px;
    padding: 0 20px;
}

.el-aside {
    width: auto;
    background: $theme-color;
    img {
        width: 40px;
        height: 40px;
        display: block;
        margin: 10px auto;
        border-radius: 5px;
    }

    li {
        // width: 200px;
        background: $theme-color;
        i::before {
            color: #fff;
        }
    }
}

// .el-main {
//     padding: 10px;
// }
.el-menu-vertical-demo {
    border: 0;
}
</style>
