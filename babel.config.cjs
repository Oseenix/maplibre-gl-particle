module.exports = {
  compact: true,
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
          browsers: [
            "last 2 versions",
            "not dead",
            "> 0.25%"
          ]
        },
        useBuiltIns: "entry",
        corejs: 3
      }
    ]
  ]
};

