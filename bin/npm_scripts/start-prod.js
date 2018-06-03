
const path = require('path');
const webpack = require('webpack');
const webpackProdConfig = require('../config/webpack-prod.config');
const {serverPath,backend,frontend_src,config,node_modules} = require('../config/paths');
const {ports} = require('../config/ports');

let compiler;

  process.env.BABEL_ENV = 'production';
  process.env.NODE_ENV = 'production';


compiler = webpack(webpackProdConfig);

    compiler.run((err, stats) => {
    
        if (err || stats.hasErrors()) {
          // Handle errors here

          console.log(stats.toString({
    
            chunks: false,  // Makes the build much quieter
    
            colors: true    // Shows colors in the console
    
          }));
    
        }
    });

    