<template>
    <div class="picture-page">
        <h2>图片预览</h2>
        <div class="button-group">
            <el-button>上传</el-button>
            <input
                type="file"
                value="上传"
                class="uploading"
                @change="uploading"
                ref="fileInput"
            />
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
import picturePreview from "../../components/picturePreview";
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
                data.data.forEach((item, index) => {
                    index <= 20 ? this.pictureUrl.push(item) : null;
                    // this.pictureUrl.push(item);
                });
            });
        },
        uploading() {
            let _this = this;
            let reads = new FileReader();
            let file = this.$refs.fileInput.files[0];
            console.log(file);
            reads.readAsDataURL(file);
            reads.onloadend = function(event) {
                _this.axios.post(`/uploading/${file.name}`, {
                    fileName: file.name,
                    body: event.target.result,
                });
            };
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
        position: relative;

        .el-button {
            background: var(--theme-color);
            color: var(--theme-text-color);
            cursor: pointer;
        }
        .uploading {
            position: absolute;
            width: 70px;
            height: 40px;
            opacity: 0;
            top: 0;
            left: 0;
            cursor: pointer;
        }
    }

    .picture-group {
        width: 100%;
        column-count: 3;
        column-gap: 20px;

        .picture-item {
            img {
                width: 400px;
                cursor: pointer;
                box-shadow: #ccc 0px 0px 20px;
                // height: 150px;
            }
        }
    }
}
</style>
