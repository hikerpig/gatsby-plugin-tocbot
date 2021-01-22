gatsby-plugin-tocbot
===

Add [tocbot](https://tscanlin.github.io/tocbot/) to your gatsby site.

# Install

```bash
yarn add gatsby-plugin-tocbot
```

# Usage

```js
// gatsby-config.js

module.exports = {
  plugins: [{
    resolve: 'gatsby-plugin-tocbot',
    options: {
      tocbotOptions: {
        contentSelector: '.js-toc',
        collapseDepth: 5,
      }
    },
  }]
}
```

# Customization

Override thes css variables in your css.

```css
/** default values */
:root {
  --toc-cur-highlight-color: black;
  --toc-text-color: inherit;
  --toc-text-hover-color: #666;
}
```
