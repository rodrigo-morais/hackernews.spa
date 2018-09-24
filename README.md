# hackernews.spa

Single Page Application for Hacker News (https://news.ycombinator.com/)

This app clones Hacker News using React / Redux creating a SPA.

Only top stories and comments from stories are implemented.


Hacker News provides an [API](https://github.com/HackerNews/API) which provides multiple endpoints and in order to get some valuable data it is necessary to call more than one endpoint. E.g. in order to present the top stories first it is necessary to call https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty which will return an array such as ```[ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, ..., 9038733 ]```. To access the stories including the data, and not only the ids, this endpoint https://hacker-news.firebaseio.com/v0/item/{id}.json needs to be called for every item in the array and returned in the first call.

This approach has two issues for this app: [N+1](https://www.infoq.com/articles/N-Plus-1) and performance

## N + 1
In this app we are calling the endpoints as much as necessary and not solving the N + 1 problem.

### Solutions
The possible solutions are:
  - use GraphQL on the backend side to aggregate the calls and let the front-end calls only use one endpoint
  - create a BFF (backend for frontend) to aggregate the API calls
  - use an API Gateway such as AWS API Gateway to aggreagate the API calls
  
## Performance
The performance problems stem from the need to have to call the API multiple times and the sheer size for the of data which should be presented.

### Solution
The app already tries to improve the performance using [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) to load data asynchronously, a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to get some data in background and [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to keep data on the client side.

Other solutions are:
- use an API Gateway to solve the N + 1 problem which already improves performance
- server-side render
  - use a tool as [next.js](https://nextjs.org/)
  - use AWS Lambda functions and S3 to create HTML pages and serve the client with raw HTML
- [Firebase](https://firebase.google.com/): the API uses Firebase which allows subscribtion to new data and can help retrieve less data with other approaches such as localstorage and web worker

## Setup

### Install dependencies

```bash
npm install
```

## Running Tests

```bash
npm test            # Run all available tests + linting
npm run tdd         # Run only specific tests with watch task
npm run jest        # Run all the unit tests
```

## Application modes

### *Standalone* mode for webpack devserver

`APP_MODE=standalone`

Targeting webpack devserver builds that are created using `npm start` or `npm run build:standalone`

Start the webpack devserver at http://localhost:8080 by running

```
npm start
```

## Configuration

## JS Linter

```bash
npm run lint
```
