# Angular + Webpack + Karma

### Install

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build binary

```sh
npm run build
```

### Improvements

- Uses Webpack (ES6 with babel) setup, all functionality is available by npm <command>
- Extensive setup with modules concept (segmentation based on functionality)
- Uses static JSON, but it's returning a promise, so we can easily hook in real resource
- Precss + Postcss for sass like css (really light weight)
- It's not BEM, but it's using clean/module css (variables)
- Unit tests with Mocha, running with Karma and supporting ES6
- Should be easily extended ...
