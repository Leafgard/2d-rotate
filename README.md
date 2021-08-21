<h1 align="center">2d-rotate</h1>
<h4 align="center">Fast and easy bi-directional 2D matrices rotation tool</h4>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> 
</p>

## Features

* Node.JS and browser support
* Fast, easy and lightweight (0 dependency)
* Bi-directional rotation (clockwise, counter-clockwise)
* Working for both square and non-square matrices
* StandardJS

## Installation

```bash
# Using Yarn
yarn add 2d-rotate

# Using NPM
npm i 2d-rotate
```

## Usage

```ts
import { rotate2d, RotationDirection } from 'rotate-2d'
// const { rotate2d, RotationDirection } = require('rotate-2d')

// Clockwise
rotate2d([
  [1, 2, 3], // [7, 4, 1],
  [4, 5, 6], // [8, 5, 2],
  [7, 8, 9]  // [9, 6, 3]
], RotationDirection.CLOCKWISE) /* Optional, clockwise by default */

// Counter-clockwise
rotate2d([
  [1, 2, 3], // [3, 6, 9],
  [4, 5, 6], // [2, 5, 8],
  [7, 8, 9]  // [1, 4, 7]
], RotationDirection.COUNTER_CLOCKWISE)
```