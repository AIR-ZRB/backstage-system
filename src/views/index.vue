<template>
    <div class="index">
        <!-- 顶上四个数据 -->
        <ul class="datas">
            <li
                v-for="item in datas"
                :key="item.name"
                :style="'background:' + item.color"
            >
                <i :class="item.icon"></i>
                <p>
                    <span>{{ item.name }}</span>
                    <span>{{ item.count }}</span>
                </p>
            </li>
        </ul>

        <!-- 两个图标数据 -->
        <ul class="chart-datas">
            <li v-for="item in chart" :key="item.name">
                <p :style="'background:' + item.color">{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datas: [
                {
                    name: "访客",
                    count: 102400,
                    color: "#33CABB",
                    icon: "el-icon-s-custom",
                },
                {
                    name: "消息",
                    count: 13400,
                    color: "#F96868",
                    icon: "el-icon-chat-line-square",
                },
                {
                    name: "余额",
                    count: 9180,
                    color: "#15C377",
                    icon: "el-icon-s-finance",
                },
                {
                    name: "订单",
                    count: 5080,
                    color: "#926DDE",
                    icon: "el-icon-shopping-bag-2",
                },
            ],
            chart: [
                {
                    name: "用户来源",
                    color: "#33CABB",
                    count: [],
                },
                {
                    name: "月度增长",
                    color: "#15C377",
                    count: [],
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.index {
    padding: 20px 0;
}
.datas {
    @include flex-layout(space-between);
    margin: 0 0 50px 0;
    li {
        list-style: none;
        width: 23%;
        padding: 10px;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        @include flex-layout(space-between, center);
        i {
            padding: 10px;
            background: rgba($color: #fff, $alpha: 0.4);
            border-radius: 50%;
            &::before {
                // width: 40px;
                font-size: 26px;
            }
        }
        span {
            display: block;
            text-align: center;
            margin: 0 0 5px 0;
        }
    }
}

.chart-datas {
    @include flex-layout(space-between,center);
    li {
        width: 49%;
        p {
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            padding: 10px;

        }
    }
}
</style>
