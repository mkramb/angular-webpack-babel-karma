# Angular + Webpack + Karma

### Install

```sh
npm install
```

### Development

```sh
npm run dev
npm test
```

### Build binary

```sh
npm run build
```

### Improvements

- Uses Webpack (ES6 with babel) setup, all functionality is available by npm <command>
- Extensive setup with modules concept (segmentation based on features)
- Uses static JSON, but it's returning a promise, so we can easily hook in a real resource
- Precss + Postcss for sass like css (really light weight)
- It's not BEM, but it's using clean/module css (variables)
- Unit tests with Mocha, running with Karma and supporting ES6
- Can be easily extended ...
