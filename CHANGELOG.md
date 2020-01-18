# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] 2020-01-18

### Added

- Added the missing `release` command to the `package.json` file.

## [0.2.3] 2020-01-18

### Removed

- `newline-per-chain-call` TSLint rule, as it was not compatible with the auto formatting of prettier.

## [0.2.2] 2020-01-17

### Removed

- A file naming rule, that was too much strict in real usage.

## [0.2.1]

### Fixed

- Bug when the mutation command would mutate the right files, producing a 0% mutation score no matter what.

## [0.2.0] 2020-01-16

### Added

- Source Typescript files will be linted using TSLint rules.

## [0.1.0] 2020-01-15

### Added

- First working version.
