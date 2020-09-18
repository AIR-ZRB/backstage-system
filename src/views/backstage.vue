<template>
    <el-container class="home-index">
        <el-header>
            <p>青空后台管理系统</p>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <!-- 左边侧边栏 -->
                <navigation :menuList="menuList" />
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
            // 列表数据
            menuList: [
                {
                    id: 1,
                    listName: "首页",
                    path: "index",
                },
                {
                    id: 2,
                    listName: "图片",
                    path: "picture",
                },
                {
                    id: 3,
                    listName: "其他",
                    path: "rests",
                    children: [
                        {
                            id: 31,
                            listName: "视频",
                            path: "video",
                        },
                        {
                            id: 32,
                            listName: "文档",
                            path: "file",
                        },
                    ],
                },
                {
                    id: 4,
                    listName: "用户",
                    path: "user",
                },
                {
                    id: 5,
                    listName: "设置",
                    path: "setting",
                },
            ],
          
        };
    },
    components: {
        navigation
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
