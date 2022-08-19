# Tailwind CSS Group Classes

Group together Tailwind CSS modifiers like `focus`, `peer-checked`, `dark:hover` and more with HTML attributes 👩‍🚀

### Using with a CDN

```html
<script
  defer
  src="https://unpkg.com/tailwind-group-classes@latest/dist/group.min.js"
></script>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    twGroupClasses()
  })
</script>
```

### Using with a Package Manager

```shell
yarn add -D tailwind-group-classes

npm install -D tailwind-group-classes
```

```js
import twGroupClasses from 'tailwind-group-classes'

document.addEventListener('DOMContentLoaded', () => {
  twGroupClasses()
})
```

## How it Works

Let's take the example of a checkbox which changes its label when checked.

Here's the current way to build this.

```html
<input type="checkbox" id="cool" class="w-8 h-8 peer" />

<label
  for="cool"
  class="border p-4 hover:bg-black hover:text-white peer-checked:bg-black peer-checked:text-white peer-focus:ring peer-focus:ring-black"
>
  Are you cool?
</label>
```

The length of the classes is something that puts people off Tailwind CSS. Personally, I think it's fine.

Here's how that example looks but using this package.

```html
<label
  for="cool"
  class="border p-4"
  tw-group
  tw-group.hover.peer-checked="bg-black text-white"
  tw-group.peer-focus="ring ring-black"
>
  Are you cool?
</label>
```

Let's break down what is happening.

First, we add the `tw-group` attribute to the element, this tells the JavaScript that it exists.

After that we can add as many `tw-group.[modifiers]="..."` to the element as needed. You can add as many modifiers to `tw-group` as you need, which works great with `dark:` classes. Here's an example.

```html
<div
  x-twcg.hover.focus.peer-checked.peer-focus="..."
  x-twcg.dark:hover.dark:focus.dark:peer-checked.dark:peer-focus="..."
>
  ...
</div>
```

### Stats

![](https://img.shields.io/bundlephobia/min/tailwind-group-classes)
![](https://img.shields.io/npm/v/tailwind-group-classes)
![](https://img.shields.io/npm/dt/tailwind-group-classes)
![](https://img.shields.io/github/license/markmead/tailwind-group-classes)
