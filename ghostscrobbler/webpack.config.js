const path = require('path');
const { resolve } = require('path/posix');

module.exports = {
  resolve: {
    fallback: {
      timers: require.resolve("timers-browserify"),
      string_decoder: require.resolve("string_decoder"),
      buffer: require.resolve("buffer"),
    },
  },
  entry: {
    background_script: {import: './src/background_script.js', filename: '../[name].js'},
    api_handler: {import: './src/api_handler.js', filename: '../[name].js'},
    content_script: {import: './src/content_script.js', filename: '../[name].js'},
    browser_action_script: {import: './src/browserAction/script.js', filename: '../browserAction/[name].js'},
    options_script: {import: './src/options/script.js', filename: '../options/[name].js'},

  },
  // since events need to be defined outside any funcs/closures we have to turn off iife
  output: {
    iife: false,
  },
  //mode: 'development',
};