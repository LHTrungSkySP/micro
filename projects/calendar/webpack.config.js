const { ModuleFederationPlugin } = require('webpack').container;

/** @type {require('webpack').Configuration} */
module.exports = {
  output: {
    publicPath: 'auto', // we setup the `publicHost` in `angular.json` file
    uniqueName: 'calendar',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    // Allow output javascript files as module source type.
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'calendar',
      library: {
        type: 'module',
      },
      filename: 'remoteEntry.js',
      exposes: {
        './CalendarModule': 'projects/calendar/src/app/calendar/calendar.module.ts',
      },
       shared: ['@angular/core', '@angular/common', '@angular/router'],

    }),
  ],
};
