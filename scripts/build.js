build({
  entryPoints: [`builds/cdn.js`],
  outfile: `dist/group.min.js`,
  platform: "browser",
  define: { CDN: true },
});

build({
  entryPoints: [`builds/module.js`],
  outfile: `dist/group.esm.js`,
  platform: "neutral",
  mainFields: ["main", "module"],
});

function build(options) {
  options.define || (options.define = {});

  return require("esbuild")
    .build({ ...options, minify: true, bundle: true })
    .catch(() => process.exit(1));
}
