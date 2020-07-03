<template>
    <div class="user-page">

      <h2>用户信息</h2>

        <el-table :data="tableData" border>
            <el-table-column
                v-for="item in tableTitle"
                :key="item"
                :prop="item"
                :label="item"
                width="180"
            >
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        @click="handleClick(scope.row)"
                        type="text"
                        size="small"
                        >编辑</el-button
                    >
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [], // 获取表格里的数据
            tableTitle: [], // 获取表格里的标题
        };
    },
    methods: {
        getUserMessage() {
            this.axios.get("/getUserMessage").then((data) => {
                this.tableData = data.data;
                // 这里由于data更新会是异步的，所以我们需要nextTick来解决这个问题
                this.$nextTick(() => {
                    this.getTableTitle();
                });
            });
        },
        getTableTitle() {
            for (let key in this.tableData[0]) {
                this.tableTitle.push(key);
            }
        },
    },
    created() {
        this.getUserMessage();
    },
};
</script>

<style lang="scss">
  .user-page {
    h2 {
      margin-bottom: 30px;
    }
    .el-button {
      background: var(--theme-color);
      color: #fff;
      padding: 10px 10px;

      &:last-child {
        background: var(--theme-danger);
      }
    }
  }
</style>
