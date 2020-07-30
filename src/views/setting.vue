<template>
    <div>
        <h2>设置</h2>

        <div class="setting-box">
            <div class="setting-item">

                <p>主题色</p>

                <el-dropdown>
                    <span class="el-dropdown-link">
                        <span>{{ theme.currentTheme }}</span>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                            v-for="item in theme.themeDropdownMenu"
                            :key="item.cnName"
                            @click.native="() => editTheme(item)"
                            >{{ item.cnName }}</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            settingItems: [
                {
                    settingItem: "主题色",
                    itemValues: [],
                },
            ],
            theme: {
                currentTheme: "清新绿",
                themeDropdownMenu: [
                    { cnName: "清新绿", enName: "green" },
                    { cnName: "基佬粉", enName: "pink" },
                    { cnName: "天空蓝", enName: "blue" },
                    { cnName: "炫酷黑", enName: "black" },
                ],
            },
        };
    },
    methods: {
        editTheme(theme) {
            this.theme.currentTheme = theme.cnName;
            this.$root.theme = theme.enName;

            let newLink = document.createElement("link");
            newLink.setAttribute("rel", "stylesheet");
            newLink.setAttribute("type", "text/css");
            newLink.setAttribute(
                "href",
                `/assets/css/theme-${theme.enName}.css`
            );

            document.head.appendChild(newLink);
        },
    },
};
</script>

<style lang="scss">
.setting-item {
    padding: 20px 0;
    border-bottom: 1px solid var(--theme-color);
    display: flex;
    justify-content: space-between;
}
</style>
