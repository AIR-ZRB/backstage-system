<template>
    <div>
        <el-table ref="filterTable" :data="commodity" style="width: 100%">
            <el-table-column
                :prop="item.en"
                :label="item.cn"
                v-for="item in showItems"
                :key="item.cn"
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            commodity: [],
            showItems: [
                {
                    cn: "商品id",
                    en: "id",
                },
                {
                    cn: "商品名称",
                    en: "name",
                },
                {
                    cn: "价格",
                    en: "price",
                },
                {
                    cn: "标签",
                    en: "description",
                },
                {
                    cn: "图片地址",
                    en: "image",
                },
                {
                    cn: "店铺名称",
                    en: "store-name",
                },
                {
                    cn: "位置",
                    en: "position",
                },
            ],
        };
    },
    methods: {
        async getRecommend() {
            const datas = await this.axios.get("/recommend");
            this.commodity = datas.data;
            console.log(datas);
        },
    },
    created() {
        this.getRecommend();
    },
};
</script>

<style></style>
