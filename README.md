# import-node-modules

Helper to set a global `node_modules` variable to include from the /node_modules path in vanilla ES6 modules.

## Example 

```html
<!-- only works, when included from within the node_modules folder --> 
<script type="module" src="../node_modules/import-node-modules/index.js"></script>
<script type="module">
    // now you can use the `node_modules` variable to import from the `/node_modules` path
    import {Chessboard} from `${node_modules}/cm-chessboard/src/Chessboard.js`;
    console.log(Chessboard);
</script>
```

It's simple, it's stupid, but it works.
