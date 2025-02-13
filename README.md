<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

# Brennerlec travel times

[![REUSE Compliance](https://github.com/noi-techpark/webcomp-a22-travel-times/actions/workflows/reuse.yml/badge.svg)](https://github.com/noi-techpark/odh-docs/wiki/REUSE#badges)
[![REUSE status](https://api.reuse.software/badge/github.com/noi-techpark/webcomp-a22-travel-times)](https://api.reuse.software/info/github.com/noi-techpark/webcomp-a22-travel-times)
[![CI/CD](https://github.com/noi-techpark/webcomp-a22-travel-times/actions/workflows/main.yml/badge.svg)](https://github.com/noi-techpark/webcomp-a22-travel-times/actions/workflows/main.yml)

A responsive webcomponent for showing travel times on Brennerlec A22 road

- [Brennerlec travel times](#brennerlec-travel-times)
  - [Usage](#usage)
    - [Attributes](#attributes)
      - [language](#language)
      - [layout](#layout)
      - [vehicle-type](#vehicle-type)
      - [reload-interval](#reload-interval)
    - [CSS varialbles](#css-variables)
      - [--color-primary](#--color-primary)
      - [--color-secondary](#--color-secondary)
      - [--color-text](#--color-text)
      - [--color-background](#--color-background)
      - [--color-border](#--color-border)
      - [--color-footer](#--color-footer)
      - [--color-footer-contrast](#--color-footer-contrast)
      - [--color-busy-regular](#--color-busy-regular)
      - [--color-busy-regular-contrast](#--color-busy-regular-contrast)
      - [--color-busy-light](#--color-busy-light)
      - [--color-busy-light-contrast](#--color-busy-light-contrast)
      - [--color-busy-severe](#--color-busy-severe)
      - [--color-busy-severe-contrast](#--color-busy-severe-contrast)
      - [--color-busy-heavy](#--color-busy-heavy)
      - [--color-busy-heavy-contrast](#--color-busy-heavy-contrast)
      - [--color-busy-critical](#--color-busy-critical)
      - [--color-busy-critical-contrast](#--color-busy-critical-contrast)
      - [--color-busy-empty](#--color-busy-empty)
      - [--color-busy-empty-contrast](#--color-busy-empty-contrast)
      - [--color-car-light](#--color-car-light)
      - [--color-car-heavy](#--color-car-heavy)
      - [--scrollbar-color](#--scrollbar-color)
      - [--scrollbar-bg](#--scrollbar-bg)
      - [--busy-box-size](#--busy-box-size)
  - [Getting started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Source code](#source-code)
    - [Dependencies](#dependencies)
    - [Build](#build)
  - [Tests and linting](#tests-and-linting)
  - [Deployment](#deployment)
  - [Run with docker](#run-with-docker)
    - [Installation](#installation)
    - [Start the docker containers](#start-the-docker-containers)
    - [Publish a new version of your webcomponent](#publish-a-new-version-of-your-webcomponent)
    - [Stop the docker containers](#stop-the-docker-containers)
    - [Delete your webcomponents from the store](#delete-your-webcomponents-from-the-store)
  - [Information](#information)
    - [Support](#support)
    - [Contributing](#contributing)
    - [Documentation](#documentation)
    - [Boilerplate](#boilerplate)
    - [License](#license)

## Usage

Include the web-component JS wile located in `/www` folder

```html
<script type="module" src="./noi-a22-travel-times.esm.js"></script>
```

Define the web component like this:

```html
  <noi-a22-travel-times></noi-a22-travel-times>
```

You may adjust the size and font of the component with regular CSS properties.


### Attributes


#### language

Language.

Type
: string

Default
: browser language or 'en' if the language is not supported

Options
: "en", "it"


#### layout

Layout appearance.
We support three layouts: desktop, tablet and mobile.

Type
: string

Default
: 'auto', which means the layout will dynamically adjust to screen size

Options
: "desktop", "tablet", "mobile", "auto"


#### vehicle-type

Initial type of vehicle.

Type
: string

Default
: 'light'

Options
: 'light', 'heavy'


#### reload-interval

Data reload interval

Type
: number

Default
: 600000 (10 minutes)

Minimum value:
: 60000 (1 minute)


### CSS variables

The component supports the following variables to adjust the appearance.
Here is an example of dark mode styles:

```css
noi-a22-travel-times.dark {
  font-family: cursive;
  outline: 1px solid red;

  --color-primary: rgb(224, 224, 224);
  --color-secondary: rgb(224, 224, 224);
  --color-text: #EEE;
  --color-background: #333;
  --color-border: #DDD;

  --color-busy-regular: #159b60;
  --color-busy-light: #6c9a0b;
  --color-busy-severe: #9a720a;
  --color-busy-heavy: #9a4c1a;
  --color-busy-critical: #9a1322;
  --color-busy-empty: #4c4c4c;
  --color-busy-empty-contrast: #FFFFFF;

  --color-car-light: #18a767;
  --color-car-heavy: #FF7F2C;

  --scrollbar-color: #777;
  --scrollbar-bg: #444;
}
```


#### --color-primary

Primary color. Default is:
```css
  --color-primary: #0068B4;
```

#### --color-secondary

Secondary color. Default is:
```css
  --color-secondary: #00A767;
```

#### --color-text

Text color. Default is:
```css
  --color-text: #6792AA;
```

#### --color-background

Background color. Default is:
```css
  --color-background: #FFFFFF;
```

#### --color-border

Border line color. Default is:
```css
  --color-border: #0068B4;
```

#### --color-footer

Footer color. Default is:
```css
  --color-footer: #0068b4;
```

#### --color-footer-contrast

Footer contrast color. Default is:
```css
  --color-footer-contrast: #FFFFFF;
```

#### --color-busy-regular

Regular traffic color. Default is:
```css
  --color-busy-regular: #18a767;
```

#### --color-busy-regular-contrast

Regular traffic contrast color. Default is:
```css
  --color-busy-regular-contrast: #FFFFFF;
```

#### --color-busy-light

Light delay traffic color. Default is:
```css
  --color-busy-light: #99d913;
```

#### --color-busy-light-contrast

Light delay traffic contrast color. Default is:
```css
  --color-busy-light-contrast: #FFFFFF;
```

#### --color-busy-severe

Severe traffic color. Default is:
```css
  --color-busy-severe: #fab813;
```

#### --color-busy-severe-contrast

Severe traffic contrast color. Default is:
```css
  --color-busy-severe-contrast: #FFFFFF;
```

#### --color-busy-heavy

Heavy traffic color. Default is:
```css
  --color-busy-heavy: #FF7F2C;
```

#### --color-busy-heavy-contrast

Heavy traffic contrast color. Default is:
```css
  --color-busy-heavy-contrast: #FFFFFF;
```

#### --color-busy-critical

Critical traffic color. Default is:
```css
  --color-busy-critical: #f22139;
```

#### --color-busy-critical-contrast

Critical traffic contrast color. Default is:
```css
  --color-busy-critical-contrast: #FFFFFF;
```

#### --color-busy-empty

No data traffic color. Default is:
```css
  --color-busy-empty: #DDD;
```

#### --color-busy-empty-contrast

No data traffic contrast color. Default is:
```css
  --color-busy-empty-contrast: #666;
```

#### --color-car-light

Label color of light car option. Default is:
```css
  --color-car-light: var(--color-busy-regular);
```

#### --color-car-heavy

Label color of heavy car option. Default is:
```css
  --color-car-heavy: var(--color-busy-heavy);
```

#### --scrollbar-color

Scrollbar thumb color. Default is:
```css
  --scrollbar-color: initial;
```

#### --scrollbar-bg

Scrollbar background color. Default is:
```css
  --scrollbar-bg: initial;
```

#### --busy-box-size

Size of the traffic box indicator. Default is:
```css
  --busy-box-size: 2.2em;
```



## Getting started

These instructions will get you a copy of the project up and running
on your local machine for development and testing purposes.

### Prerequisites

To build the project, the following prerequisites must be met:

- Node 20 / NPM 10

For a ready to use Docker environment with all prerequisites already installed and prepared, you can check out the [Docker environment](#docker-environment) section.

### Source code

Get a copy of the repository:

```bash
git clone https://github.com/noi-techpark/webcomp-a22-travel-times.git
```

Change directory:

```bash
cd webcomp-a22-travel-times/
```

### Dependencies

Download all dependencies:

```bash
npm install
```

### Build

Build and start the project:

```bash
npm run start
```

The application will be served and can be accessed at [http://localhost:8998](http://localhost:8998).

## Tests and linting

The tests and the linting can be executed with the following commands:

```bash
npm run test
npm run lint
```

## Deployment

To create the distributable files, execute the following command:

```bash
npm run build
```

## Run with docker

If you want to test the webcomponent on a local instance of the [webcomponent store](https://webcomponents.opendatahub.com/) to make sure that it will run correctly also on the real store.
You can also access the webcomponent running in a simple separated docker container outside of the store.

If you have already developed your webcomponent and now want to test it on a local instance of the store, just copy `.env.example`, `docker-compose.yml`, `wcs-manifest.json` and `infrastructure/docker` into your root folder. Adjust your `package.json` and `wcs-manifest.json` files as described on the top of this readme. Then follow the instructions below.

For accessing the webcomponent in a separated docker in the browser you will need a server (e.g. webpack dev-server) that is hosting a page which includes the webcomponent tag, as well as the script defining it. This page needs to be hosted on port 8998 as specified in your docker-compose file.

### Installation

Install [Docker](https://docs.docker.com/install/) (with Docker Compose) locally on your machine.

### Start the docker containers
- Create a .env file: <br>
  `cp .env.example .env`
- [Optional] Adjust port numbers in .env if they have conflicts with services already running on your machine
- Start the store with: <br>
  `docker-compose up -d`
- Wait until the containers are running. You can check the current state with: <br>
  `docker-compose logs --tail 500 -f`
- Access the store in your browser on: <br>
  `localhost:8999`
- Access webcomponent running in separated docker in your browser on: <br>
  `localhost:8998`

### Publish a new version of your webcomponent
- Increase version number WC_VERSION in your .env file
- Then run: `docker-compose up wcstore-cli`

### Stop the docker containers
- `docker-compose stop`

### Delete your webcomponents from the store
- `[sudo] rm -f workspace`
- `docker-compose rm -f -v postgres`


## Information

### Support

For support, please contact [help@opendatahub.com](mailto:help@opendatahub.com).

### Contributing

If you'd like to contribute, please follow the following instructions:

- Fork the repository.
- Checkout a topic branch from the `main` branch.
- Make sure the tests are passing.
- Create a pull request against the `main` branch.

A more detailed description have a look at our [Getting Started
Guide](https://github.com/noi-techpark/odh-docs/wiki/Contributor-Guidelines:-Getting-started).

### Documentation

More documentation can be found at [https://docs.opendatahub.com](https://docs.opendatahub.com).

### Boilerplate

The project uses this boilerplate: [https://github.com/noi-techpark/webcomp-boilerplate](https://github.com/noi-techpark/webcomp-boilerplate).

### License

The code in this project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 license. See the [LICENSE.md](LICENSE.md) file for more information.

### REUSE

This project is [REUSE](https://reuse.software) compliant, more information about the usage of REUSE in NOI Techpark repositories can be found [here](https://github.com/noi-techpark/odh-docs/wiki/Guidelines-for-developers-and-licenses#guidelines-for-contributors-and-new-developers).

Since the CI for this project checks for REUSE compliance you might find it useful to use a pre-commit hook checking for REUSE compliance locally. The [pre-commit-config](.pre-commit-config.yaml) file in the repository root is already configured to check for REUSE compliance with help of the [pre-commit](https://pre-commit.com) tool.

Install the tool by running:
```bash
pip install pre-commit
```
Then install the pre-commit hook via the config file by running:
```bash
pre-commit install
```

