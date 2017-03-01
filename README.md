# eslint-config-crunch

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used in javascript [Crunch.io](http://crunch.io) projects


## Installation

```
$ npm install --save-dev eslint eslint-config-crunch
```


## Usage

Once the `eslint-config-crunch` package is installed, you can use it by specifying `crunch` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "crunch",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License
MIT