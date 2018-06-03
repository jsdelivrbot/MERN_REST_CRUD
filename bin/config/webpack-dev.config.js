
const {frontend_src,dev_www} = require('./paths.js')
const path = require('path');
const webpack = require('webpack');

module.exports = {
    
        // Configuration Object  
    
           mode: "development",
            context: path.resolve('.'),
            entry: [
                'webpack-hot-middleware/client',
                'babel-polyfill',
                frontend_src + '/app.js'
            ],
    
            output: {
    
              path:  dev_www,
              publicPath: 'http://localhost:3000/',
              filename: "bundle.js"
    
            },
    
            plugins: [
              new webpack.NamedModulesPlugin(),
              new webpack.HotModuleReplacementPlugin()
            ],  

            
            module:{
    
              rules:[
    
                  {
    
                      test:/\.css$/,
    
                      use:['style-loader','css-loader']
    
                  },
    
                
                    {
                      test: /\.js$/,
                      exclude: /node_modules/,
                      use: {
                        loader: "babel-loader",
                     
                      query : {
                        presets: ["env", "react"],
                        
                        
                      }
                    }, 
                    }
                  
    
             ],
    
          },
    
                
    
      }