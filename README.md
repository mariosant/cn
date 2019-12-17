![Cn](cn.png)

> Easy class names handling!

[![NPM version](https://img.shields.io/npm/v/@mariosant/cn.svg)](https://www.npmjs.com/package/@mariosant/cn)
[![CircleCI](https://circleci.com/gh/mariosant/cn/tree/master.svg?style=svg)](https://circleci.com/gh/mariosant/cn/tree/master)

Cn is a simple utility to help you manage class names in the modern app development ecosystem.

## Installation

Just add `@mariosant/cn` to your `package.json`.

```bash
$ npm install @mariosant/cn

# or
$ yarn add @mariosant/cn
```

You can now import the module and use it like

```javascript
import cn from "@mariosant/cn";
```

## Usage

Using cn is pretty simple. It is inspired by the well known [Classnames](https://github.com/JedWatson/classnames) package, but solves a few edge cases.

```javascript
import cn from '@mariosant/cn';

const isActive = true;
const SomeComponent = () => <Button className={cn('btn', [isActive, 'active', 'inactive'])} .../>
```

## Development

Easy enough! No build required.

```bash
$ yarn install  # to install dependencies
$ yarn test     # to run the test suite
```

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license.

[https://github.com/mariosant/cn](https://github.com/mariosant/cn)

## Contributing

1. Fork it (<https://github.com/mariosant/cn/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
