
module.exports = {
    // publicPath: "./",
    css: {
        sourceMap: false,
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/css/base.scss";`,
            },
        },
    },
}