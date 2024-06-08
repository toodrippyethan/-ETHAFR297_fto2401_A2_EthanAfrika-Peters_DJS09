module.exports = {
  mode: 'development', // Set mode to 'development'
  output: {
    filename: '[name].pack.js'
  },
  entry: {
    index: './src/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
