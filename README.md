# openapi-parser

This is an OpenAPI 3.1 Parser for the [Objectified Framework](https://www.github.com/objectified-framework/).

## Use

Applies an OpenAPI spec to the main entrypoint, `ApiSpec`, parses its contents,
and creates an object tree that can be used for programmatic purposes.

Example:

```typescript
const specFile = yaml.parse(fs.readFileSync('openapi.yaml', 'utf8'));

try {
  const spec: ApiSpec = new ApiSpec(specFile);

  const components = spec.getComponents();
  const paths = spec.getPaths();
  const servers = spec.getServers();
  const tags = spec.getTags();
  const info = spec.getInfo();

  // Do things with components, paths, servers, tags, and info here
} catch(e: Exception) {
  console.log('Unable to parse openapi spec', e);
}
```

## Used by

@objectified/openapi-autogen

## License

[Commercial-friendly Apache 2.0 License.](LICENSE)  100% Open Source.
