# Menu Component
Menu that toggles from one side of the screen with the click of a floating button and shows several options for the user to choose.

# How to run demo

```bash
npm install
npm run start
```

## How do I do? (HTML Markup)

```
  <menu-component 
    id="menu-component"
    menu-title="Select an option">
  </menu-component>
 ```

## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `data`  | `data`   |   `Data about the options`  | `any` | `{ "items": [{"title": "Option 1", "href": "#"},...]}`|
| `menuTitle`  | `menuTitle`   |   `Title on the top of the menu`  | `string` | `title`|

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
