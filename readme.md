# preact-progress [![NPM](https://img.shields.io/npm/v/preact-progress.svg)](https://www.npmjs.com/package/preact-progress)

> Simple and lightweight (~590 bytes gzip) progress bar component; for :atom_symbol: [Preact](https://github.com/developit/preact)

#### [Demo](https://jsfiddle.net/lukeed/kws8r5v4/)

## Install

```
$ npm install --save preact-progress
```

> :exclamation: **Pro Tip:** Use [Yarn](https://yarnpkg.com/) to install dependencies 3x faster than NPM!

```html
<script src="https://unpkg.com/preact-progress@1.0.0/dist/preact-progress.min.js"></script>
```

## Usage

Provide a `value`; everything else is optional.

```js
import { h } from 'preact';
import Progress from 'preact-progress';

onChange = (ctx, val) => console.log(`${val}% complete`);
onComplete = ctx => {ctx.base.style.opacity = 0};

<Progress 
  id="loader" className="loader"
  value={ 16.3 } height="3px" color="#6cc644"
  onChange={ onChange }
  onComplete={ onComplete }
/>
```

## Properties

#### value
Type: `Number`<br>
Default: `0`<br>
The current progress; between 0 and 100. Mapped to a `style:width` percentage.

#### onStart
Type: `Function`<br>
The callback function when progress bar has reached 100%. Receives the current `Progress` component as its only argument.

#### onChange
Type: `Function`<br>
The callback function whenever the progress value updates. Receives the current `Progress` component as its first argument & the current `value` as its second argument.

#### onComplete
Type: `Function`<br>
The callback function when progress bar has reached 100%. Receives the current `Progress` component as its only argument.

#### height
Type: `String`<br>
Default: `4px`<br>
The height of the animated progress bar.

#### color
Type: `String`<br>
Default: `black`<br>
The color of the animated progress bar.

#### id
Type: `String`<br>
Default: `none`<br>
The `id` attribute to pass down.

#### className
Type: `String`<br>
Default: `none`<br>
The `className` attribute to pass down. Added to the wrapper element.

## License

MIT © [Luke Edwards](https://lukeed.com)
