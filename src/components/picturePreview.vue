<template>
    <div
        class="picture-preview"
        v-show="_props.previewShow"
        @click="previewIsShow"
    >
        <img :src="_props.previewSrc" alt="" ref="currentPicture" />
    </div>
</template>

<script>
export default {
    props: ["previewShow", "previewSrc"],
    data() {
        return {
            num: 0,
        };
    },
    methods: {
        previewIsShow() {
            this.$emit("update:previewShow", false);
            this.$refs.currentPicture.style.width = null;
            this.$refs.currentPicture.style.height = null;
        },
        imageRatio() {
            this.num++;
            if (this.num % 2 === 0) return;

            const screenWidth = document.documentElement.clientWidth;
            const screenHeight = document.documentElement.clientHeight;
            const imageWidth = this.$refs.currentPicture.offsetWidth;
            const imageHeight = this.$refs.currentPicture.offsetHeight;
            const imgDom = this.$refs.currentPicture;

            imageWidth > imageHeight
                ? (imgDom.style.width = `${screenWidth - 20}px`)
                : (imgDom.style.height = `${screenHeight - 20}px`);
        },
    },
    updated() {
        this.imageRatio();
    },
};
</script>

<style lang="scss">
.picture-preview {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
