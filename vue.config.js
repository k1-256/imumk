module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "/imumk/" : "/",
};
