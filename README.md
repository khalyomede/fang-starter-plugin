# fang-starter-plugin

Starter project to get started creating a plugin for Fang quickly.

## Summary

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)

## About

This project is meant to be cloned and tweaked as needed. It is built to offer your a good starter, without worrying about installing and configuring dependencies. For most of the usage you will not have to change a lot in the core of this project. However, if this is the case, just do not hesitate to create an issue, I will be glad to try to help as I can.

Happy coding!

## Features

- Support for Typescript, and generates declaration files
- Lint your files at build time using TSLint
- Contains a test command that will also run a coverage test
- Contains a mutation command (in case you are interested)
- Configured with `peerDependencies` on `"@fang/core": "0.*"`
- Configured to contain the required `keywords` in the `package.json` to get your plugin displayed in the website documentation (website coming soon)
- Contains a build command to produce an ES5, transpiled, ready to use version of your plugin (which contains your Typescript declaration files)
- Contains a command to publish patch, features and breaking changes using `np`

## Installation

Here is a todolist of what you need to do to well appropriate yourself this repository.

1. Clone the project: `git clone https://github.com/khalyomede/fang-starter-plugin YOUR-PLUGIN-NAME`
2. Install the dependencies
   - Using NPM: `npm install`
   - Using Yarn: `yarn install`
3. Change the origin of the repository: `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git`
4. Check your origin has changed correctly: `git remote -v`
5. Change the following key values in the `package.json`
   - name
   - description
   - repository
   - author
6. Add some keywords in the key `keywords` of the `package.json` (but **keep** the keyword `fang-plugin`)
7. Profit

## Examples

- [1. Transpile and build files](1-transpile-and-build-files)
- [2. Add some test, and run them](2-add-some-test-and-run-them)
- [3. Run the mutation tests](3-run-the-mutation-tests)
- [4. Publish changes](4-publish-changes)

### 1. Transpile and build files

Run this command in your command line.

```bash
npm run build
```

### 2. Add some test, and run them

All the tests are located in the `test` folder. You can organize your tests in subfolders. Check the existing file for an example.

All the tests use `mocha` and `chai`.

Once you are happy with your tests, you can check if they pass using this command.

```bash
npm run test
```

### 3. Run the mutation tests

If you are comfortable with the concept of mutations in your tests, or you are curious to see if your tests are not producing mutations, you can run this command to check your mutation score.

```bash
npm run mutate
```

### 4. Publish changes

You first need to have published your project before trying to use this command. If you did not published your project yet, use this command.

```bash
npm publish
```

This will push your repository in the NPM package registry so others people will be able to require your package in their project.

Do not forget to create a `v0.1.0` tag and publishing it to your repository so people can easily browse your package history by tag.

Once you have published your project, and you add some changes you want to publish, use this command.

```bash
npm run release
```

This will prompt you what kind of change you want to apply, and will handle all the rest, which is:

- testing a last time your project
- checking if you have remaining changes to push or not
- creating the tag (according to your choice) in your github repository, as well as publishing this tag
- publishing the new version on NPM
