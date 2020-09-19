<template>
    <el-container class="home-index">
        <el-header>
            <p>青空后台管理系统</p>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <!-- 左边侧边栏 -->
                <el-row class="tac">
                    <el-col>
                        <el-menu
                            :default-active="defaultActive"
                            class="el-menu-vertical-demo"
                            active-text-color="var(--color-light)"
                            :router="true"
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
            <!-- 右边主题内容 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import navigation from "../components/navigation.vue";
export default {
    data() {
        return {
            defaultActive: "/home/index",
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
                            id: 31,
                            listName: "主会场",
                            path: "video",
                        },
                        {
                            id: 32,
                            listName: "限时秒杀",
                            path: "file",
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
                            path: "picture",
                            icon: "el-icon-picture-outline",
                        },
                        {
                            id: 32,
                            listName: "视频",
                            path: "video",
                            icon: "el-icon-video-camera",
                        },
                        {
                            id: 33,
                            listName: "文档",
                            path: "file",
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
};
</script>

<style lang="scss">
.home-index {
    height: 100%;
}
.el-header {
    // background-image: linear-gradient(to right, #eae5c9, #6cc6cb);
    // background-color: #54C67D;
    background: var(--theme-color);
    display: flex;
    align-items: center;
    p {
        font-size: 22px;
        color: #fff;
    }
}

.el-menu-vertical-demo {
    border: 0;
}
</style>
