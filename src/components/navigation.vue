<template>
    <!-- 有二级菜单的,可以想想怎么修改成二级菜单 -->
    <el-submenu
        :index="'/backstage/' + _props.item.path"
        v-if="_props.item.children"
    >
        <template slot="title">
            <i :class="_props.item.icon"></i>
            <span slot="title">{{ item.listName }}</span>
        </template>
        <el-menu-item-group>
            <el-menu-item
                v-for="childrenItem in _props.item.children"
                :index="childrenItem.path"
                :key="childrenItem.path"
                >{{ childrenItem.listName }}</el-menu-item
            >
        </el-menu-item-group>
    </el-submenu>

    <!-- 一级菜单 -->
    <el-menu-item :index="'/backstage/' + _props.item.path" v-else>
        <template>
            <i :class="_props.item.icon"></i>
            <span slot="title">{{ item.listName }}</span>
        </template>
    </el-menu-item>
</template>

<script>
export default {
    props: ["item"],
    data() {
        return {};
    },
    created() {
        this.defaultActive = this.$route.fullPath;
    },
};
</script>

<style lang="scss">
.el-menu-item-group__title {
    padding: 0;
}
</style>
