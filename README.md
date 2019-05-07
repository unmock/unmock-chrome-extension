# Unmock OpenAPI builder

[![CircleCI](https://circleci.com/gh/unmock/unmock-webextension.svg?style=svg)](https://circleci.com/gh/unmock/unmock-webextension)

Web extension for building OpenAPI specifications, running in Chrome and Firefox.

Made with ❤️ by [unmock](https://www.unmock.io/).

### Description

Are you a developer using third-party APIs? Easily create formal OpenAPI specification from API documentation in browser to:

- write better tests
- automatically generate client code
- migrate legacy documentation to documentation autogenerated from OpenAPI specification

Extension does not send your data anywhere and is fully open-source: https://github.com/unmock/unmock-webextension

### Features

- Smartly parse OpenAPI specification from written documentation
- Use Swagger editor in-browser to fill in the missing parts

Note that the smart parser is in early-stage development. We welcome contributions and feature requests at https://github.com/unmock/unmock-webextension/issues.

### Get started

- Install extension
- Open a page containing written API documentation, for example, https://docs.readthedocs.io/en/stable/api/v2.html
- Extension icon should light up with a badge. Open Swagger editor from the pop-up window to autogenerate specification template.
- Fill in the missing parts
- Export the finished specification

### Get in touch

- Learn more about unmock, your favorite tool for developing apps with third-party APIs: https://unmock.io/

- Email us: dev@meeshkan.com

- Find us in Medium: https://medium.com/@meeshkan

- Tweet @MeeshkanML

- Add issues, feature requests and pull requests in GitHub: https://github.com/unmock/unmock-webextension

- Learn more about Swagger editor: https://github.com/swagger-api/swagger-editor

## Development

Install dependencies:

```bash
$ yarn
```

Create production build in `build/` directory:

```bash
$ yarn build
```

Run webpack development server with hot reloading:

```bash
$ yarn start
```

### Testing in Chrome

1. Open the Extension Management page by navigating to `chrome://extensions`.
1. Enable Developer Mode by clicking the toggle switch next to Developer mode.
1. Click the `Load unpacked` button and select `build/` directory.

### Testing in Firefox

Follow the instructions [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Trying_it_out), choosing `manifest.json` from `build/` directory.

## License

This project acknowledges code from the open-source projects below.

### [Swagger editor](https://github.com/swagger-api/swagger-editor)

Copyright 2018 SmartBear Software.

### [Chrome webextension boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate)

Copyright (c) 2016 Samuel Simões.
