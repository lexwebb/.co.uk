module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
            @import "src/_breakpoints.scss";
            @import "src/_mixins.scss";
            @import "src/_globals.scss";
          `,
      },
    },
  },
};
