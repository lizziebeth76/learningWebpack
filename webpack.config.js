module.exports = {
    entry: {
      app: "./src/javascript/index"
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "style-loader"
      },
      {
        test: /\.css$/,
        use: "css-loader"
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    port: "3001",
    inline: true
},
resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".json", ".css"],
modules: [
  './node_modules',
  './app'
]
},
}
    

