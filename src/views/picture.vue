<template>
    <div class="picture-page">
        <h2>图片预览</h2>
        <div class="button-group">
            <el-button>上传图片</el-button>
        </div>
        <div class="picture-group" @click="previewPicture">
            <div class="picture-item" v-for="item in pictureUrl" :key="item">
                <img :src="'http://localhost:3000/getPicture/' + item" alt="" />
            </div>
        </div>

        <picturePreview
            :previewSrc="previewSrc"
            :previewShow.sync="previewShow"
        ></picturePreview>
    </div>
</template>

<script>
import picturePreview from "../components/picturePreview";
export default {
    data() {
        return {
            pictureUrl: [],
            previewSrc: "",
            previewShow: false,
        };
    },
    components: {
        picturePreview,
    },
    methods: {
        previewPicture(event) {
            console.log(event.target.src);

            if (event.target.src) {
                this.previewShow = true;
                this.previewSrc = event.target.src;
            }
        },
        getPictureUrl() {
            this.axios.get("/getPictureUrl").then((data) => {
                data.data.forEach((item,index) => {
                    index <= 20 ? this.pictureUrl.push(item) : null;
                    // this.pictureUrl.push(item);
                });
            });
        },
    },
    created() {
        this.getPictureUrl();
    },
};
</script>

<style lang="scss">
.picture-page {
    padding-right: 10px;
    .button-group {
        margin: 20px 0;
        .el-button {
            background: var(--theme-color);
            color: var(--theme-text-color);
        }
    }

    .picture-group {
        width: 100%;
        column-count: 4;
        column-gap: 10px;

        .picture-item {
            img {
                width: 400px;
                cursor: pointer;
                // height: 150px;
            }
        }
    }
}
</style>
