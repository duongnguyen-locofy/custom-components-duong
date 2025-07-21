# `@rupertong-ui/utils-build-module-bundler`

> Module bundler for rupertong-ui  components within the monorepo library

## Usage

Add as a dev dependency in your package

```
lerna add @rupertong-ui/utils-build-module-bundler --dev --scope=@rupertong-ui/your-package
```

Inside your `package.json`, add a `build` script:

```json
{
  "scripts": {
    "build": "module-bundler"
  }
}
```
