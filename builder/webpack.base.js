module.exports = {
    /**
     * todo productionSourceMap
     * 把productionSourceMap 置为false，既可以减少包大小，也可以加密源码。这样打包后文件小而且别人看不到你的源码了。
     * 把productionSourceMap true， 项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
     * 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
     */
    productionSourceMap: false,

    /**
     * todo publicPath
     * 项目打包时，打包出来的文件根目录，如果我们设置成“/”则我们打包后默认都是在dist目录下,假设我们设置成"/app"，
     * 我们所打包的dist目录下会生成一个app目录，打包后的资源文件都是在app目录下的，这是所有的静态资源都会找不到，所以我们一般都是设置成“/”的。
     */

    publicPath: '/',
    /**
     * todo outputDir
     * 项目打包时输出的文件目录，比如说设置成“dist”，那么我们打包后的目录名称就是“dist”，我们设置成“build”，打包后的目录名称就是“build”。
     */
    outputDir: 'dist',

    /**
     * todo assetsDir
     * 我们放置静态资源的目录，项目刚创建时，默认都是asset，所以一般我们不会动，直接配置 assetDir:"assets".
     * 当然，如果你不太习惯，也可以换成你想要的名字，只需要把目录名和这个名字时对应的,比如说你习惯用static，
     * 目录名称是static，那么这里就可以写成 assetsDir:"static"。
     */
    assetsDir: 'assets',

    /**
     * todo lintOnSave 是否在开发环境下每次保存代码时都启用 eslint验证
     * 前端程序员都会有一个通病，每次写完一点代码，哪怕写了一个单词，定义一个变量，都会习惯性的格式化一下代码，
     * 保存下代码，这个配置就是每次我们保存代码时，是否要经过esLint检查代码的，因为我个人不太习惯使用esLint,所以没有做过多了解，
     * 如果项目中有使用eslint的话，不想被检查到，就可以用，如果没有，可以不用写这个配置。
     */
    lintOnSave: false,
}
