module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?victory|react-native-svg|react-native|@react-native(-community)?)|react-navigation|@react-navigation/.*|.png)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  collectCoverageFrom: ["./src/**/*.{ts,tsx}", "!./src/**/styles.ts"],
  testPathIgnorePatterns: ["./__tests__"],
  coverageDirectory: "./__tests__/coverage",
};
