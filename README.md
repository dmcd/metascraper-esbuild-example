# Metascraper esbuild example

This repo demonstrates some issues when attempting to use metascraper from within a lambda function built using esbuild.

Using CDK Synthesize triggers bundling of the code in [src/lambda-fns/scrapeUrl.ts](src/lambda-fns/scrapeUrl.ts)

Which requires several metascraper packages.

```
yarn synth
```

And results in the following errors:

```
Bundling asset dev-example/scrapeUrl/Code/Stage...
✘ [ERROR] Could not resolve "./build/Release/re2"

    node_modules/re2/re2.js:3:20:
      3 │ const RE2 = require('./build/Release/re2');
        ╵                     ~~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] Could not resolve "canvas"

    node_modules/jsdom/lib/jsdom/utils.js:160:25:
      160 │   const Canvas = require("canvas");
          ╵                          ~~~~~~~~

  You can mark the path "canvas" as external to exclude it from the bundle, which will remove this
  error. You can also surround this "require" call with a try/catch block to handle this failure at
  run-time instead of bundle-time.

▲ [WARNING] "./xhr-sync-worker.js" should be marked as external for use with "require.resolve"

    node_modules/jsdom/lib/jsdom/living/xhr/XMLHttpRequest-impl.js:31:57:
      31 │ const syncWorkerFile = require.resolve ? require.resolve("./xhr-sync-worker.js") : null;
         ╵                                                          ~~~~~~~~~~~~~~~~~~~~~~

1 warning and 2 errors
node:child_process:869
    throw err;
    ^
```

CDK uses esbuild under the hood for the NodeJsFunction construct. You can see the same errors if you run esbuild manually.

```
yarn esbuild
```
