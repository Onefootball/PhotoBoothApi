# PhotoBoothApi
Api for taking screenshots of websites


## Setup

You must install [node] (https://nodejs.org/en/) and [npm] (https://www.npmjs.com/) on machine you want to run api on.

Additionally, you must have phantomjs globally available. You can set it up by running:

```
npm install -g phantomjs
```

## Dependencies

```
npm install
```

## Running

```
node server.js
```

## Endpoints

### Screenshot

```
/api/screenshot/:url
```

where url is a url to the page you want to render. Url has to be encoded when passed in.
