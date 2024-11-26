# Icons

<img src="public/cover.jpg" />

This library contains the icons used in Storybook and Chromatic apps and marketing sites. They are 14x14. To view the list of all available icons please go to https://main--64b56e737c0aeefed9d5e675.chromatic.com/

## Install

```console
yarn add @storybook/icons
```

## To Do

- [x] Export every single icons instead of a single component
- [x] Add stories for each components

## Generating new icons from Figma

This command will fetch all icons from Figma locally and create react components + stories automatically

```console
yarn generate-icons
```

Inpired from [this article](https://blog.certa.dev/generating-react-icon-components-from-figma).

## Developing

Watch and rebuild code with `tsup` and runs Storybook to preview your UI during development.

```console
yarn storybook
```

## Building

Build package with `tsup` for production.

```console
yarn build
```
