<template>
    <el-row class="tac">
        <el-col>
            <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" active-text-color="var(--color-light)"  :router="true"> 
                <el-menu-item
                    v-for="item in _props.menuList"
                    :key="item.path"
                    :index="'/backstage/'+item.path"
                >
                    <template>
                        <i :class="listIcons[item.path]"></i>
                        <span slot="title">{{ item.listName }}</span>
                    </template>
                </el-menu-item>

                <!-- 有二级菜单的,可以想想怎么修改成二级菜单 -->
                <!-- <el-submenu index="1" v-if="item.children">
                    <template>
                        <i :class="listIcons[item.path]"></i>
                        <span slot="title">{{ item.listName }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item
                            :index="childrenItem.path"
                            v-for="childrenItem in item.children"
                            :key="childrenItem.path"
                            >{{ childrenItem.listName }}</el-menu-item
                        >
                    </el-menu-item-group>
                </el-submenu> -->
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: ["menuList"],
    data() {
        return {
            // 列表对应的图标
            listIcons: {
                index: "el-icon-monitor",
                setting: "el-icon-setting",
                picture: "el-icon-picture-outline",
                file: "el-icon-files",
                video: "el-icon-video-camera",
                rests: "el-icon-s-fold",
                user: "el-icon-user",
            },
            defaultActive: "/home/index"
        };
    },
    created(){
        this.defaultActive = this.$route.fullPath;
    }
};
</script>

<style lang="scss"></style>
