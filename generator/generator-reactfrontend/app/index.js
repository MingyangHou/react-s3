"use strict";

const Generator = require("yeoman-generator");

var yeoman = require("yeoman-environment");
var env = yeoman.createEnv();

var mkdirp = require("mkdirp");
const fs = require("fs-extra");
const yosay = require("yosay");

module.exports = class extends Generator {
  createProjectFileSystem() {
    var destRoot = this.destinationRoot();
    var sourceRoot = this.sourceRoot();
    var appDir = destRoot + "/app";

    mkdirp(appDir + "/script");
    mkdirp(appDir + "/img");

    this.fs.copy(sourceRoot + "/.bowerrc", destRoot + "/.bowerrc");
    this.fs.copy(sourceRoot + "/bower.json", destRoot + "/bower.json");
    this.fs.copy(sourceRoot + "/.editorconfig", destRoot + "/.editorconfig");
    this.fs.copy(sourceRoot + "/.jshintrc", destRoot + "/.jshintrc");
    this.fs.copy(
      sourceRoot + "/CONTRIBUTING.md",
      destRoot + "/CONTRIBUTING.md"
    );
    this.fs.copy(sourceRoot + "/README.md", destRoot + "/README.md");
    this.fs.copy(sourceRoot + "/humans.txt", appDir + "/humans.txt");
    this.fs.copy(sourceRoot + "/robots.txt", appDir + "/robots.txt");
    this.fs.copy(sourceRoot + "/.eslintignore", destRoot + "/.eslintignore");
    this.fs.copy(sourceRoot + "/.eslintrc.json", destRoot + "/.eslintrc.json");
    this.fs.copy(
      sourceRoot + "/.prettierignore",
      destRoot + "/.prettierignore"
    );
    this.fs.copy(sourceRoot + "/.prettierrc", destRoot + "/.prettierrc");
    this.fs.copy(sourceRoot + "/package.json", destRoot + "/package.json");
    this.fs.copy(
      sourceRoot + "/.lintstagedrc.json",
      destRoot + "/.lintstagedrc.json"
    );
    this.fs.copy(sourceRoot + "/pulumiaws", destRoot + "/pulumiaws");
    this.fs.copy(sourceRoot + "/build", destRoot + "/build");
    this.fs.copy(sourceRoot + "/src", destRoot + "/src");
    this.fs.copy(sourceRoot + "/public", destRoot + "/public");
    this.fs.copy(
      sourceRoot + "/react-s3-pipelines.yml",
      destRoot + "/react-s3-pipelines.yml"
    );
  }
  installDependencies() {
    this.addDependencies({
      "@testing-library/jest-dom": "^5.16.1",
      "@testing-library/react": "^12.1.2",
      "@testing-library/user-event": "^13.5.0",
      react: "^17.0.2",
      "react-dom": "^17.0.2",
      "react-scripts": "5.0.0",
      "web-vitals": "^2.1.3",
    });
    this.addDevDependencies({
      "@commitlint/cli": "^16.0.2",
      "@commitlint/config-conventional": "^16.0.0",
      commitizen: "^4.2.4",
      "cz-conventional-changelog": "^3.3.0",
      eslint: "^8.6.0",
      "eslint-config-airbnb-base": "^15.0.0",
      "eslint-config-prettier": "^8.3.0",
      "eslint-plugin-import": "^2.25.4",
      "eslint-plugin-prettier": "^4.0.0",
      husky: "^7.0.0",
      jest: "^27.4.7",
      "lint-staged": "^12.1.7",
      "mini-css-extract-plugin": "2.4.5",
      prettier: "2.5.1",
    });

    env.registerStub(Generator, "npm:app");
  }

  initializing() {
    this.log(yosay("Welcome to reactfrontend generator -- Ming"));
  }
};
