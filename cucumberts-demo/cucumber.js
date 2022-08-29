module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require src/test/typescript/**/*.ts",
    "--publish-quiet",
  ].join(" "),
};
