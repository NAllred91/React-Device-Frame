const path = require('path')

module.exports = {
    entry: './index.js',
    module: {
      rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
      ]
    },
    resolve: {
      extensions: ['.js'],
      alias: {          
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
      }  
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js',
      libraryExport: "default" ,
      libraryTarget: 'umd',
    }, 
    externals: {      
        // Don't bundle react or react-dom      
        react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }  
    } 
  }