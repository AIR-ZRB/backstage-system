<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 后台接口的地址
            address: "http://localhost:3000/",
        };
    },
    created() {
        const LinkCss = document.getElementById("theme");
        fetch(`/css/theme-green.css`)
            .then((res) => res.text())
            .then((data) => (LinkCss.innerHTML = data));
    },
};
</script>

<style lang="scss">
li {
    list-style: none;
}

* {
    padding: 0;
    margin: 0;
}

html,
body,
#app {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}
i::before {
    font-weight: 700;
}
</style>
