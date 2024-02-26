module.exports = {
  presets: [
    "module:@react-native/babel-preset",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".ios.js",
          ".android.js",
          ".ios.jsx",
          ".android.jsx",
          ".js",
          ".jsx",
          ".json",
          ".ts",
          ".tsx",
        ],
        root: ["."],
        alias: {
          "@services": "./src/services",
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@routes": "./src/routes",
          "@screens": "./src/screens",
          "@theme": "./src/theme",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
