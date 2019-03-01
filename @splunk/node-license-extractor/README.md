# Splunk node_modules license extractor

A helper to extract license data for node_module dependencies using Yarn.

## How to use in your project

1. Add `@splunk/node-license-extractor` to your project's `devDependencies`
1. Add a `script` entry calling `splunk-node-license-extractor` with one or more package
paths (can use shell globbing):
   ```
   "extract-licenses": "splunk-node-license-extractor packages/*",
   ```
   
If no paths are given the default is `.`, i.e. the current package.
   
**Caution**: This utility is compatible with Yarn Workspaces, but Yarn has a bug (observed in
version 1.3.2) where it outputs incorrect package versions if the license task is run from
a package directory. For now, make sure to always run the license extractor from the monorepo root!
