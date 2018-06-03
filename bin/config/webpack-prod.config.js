
const {frontend_src,www} = require('./paths.js')
const path = require('path');

module.exports = {
    
        // Configuration Object  
    
           
            context: path.resolve('.'),
            entry: [
              'babel-polyfill',
              frontend_src + '/app.js'
            ],
    
            output: {
    
              path: www + '/',
              publicPath: www + '/',
              filename: "bundle.js"
    
            },
    
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