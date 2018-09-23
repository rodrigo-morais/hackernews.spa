# hackernews.spa

Single Page Application for Hacker News (https://news.ycombinator.com/)

This app clones Hacker News using React / Redux creating a SPA.

Only top stories and comments from stories are implemented.


Hacker News provides an [API](https://github.com/HackerNews/API) which provides multiple endpoints and to get some valuable data is necessary to call more than one endpoint. For example, to present the top stories first is necessary to call https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty which will return an array as ```[ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, ..., 9038733 ]```. To get the stories with data, and not only the ids, is necessary to call https://hacker-news.firebaseio.com/v0/item/{id}.json to every item in the array returned in the first call.

This approach brought two problems for this app: [N+1](https://www.infoq.com/articles/N-Plus-1) and Performance

## N + 1
In this app we are calling the endpoints as much as necessary and not solving the N + 1 problem.

### Solutions
The possible solutions are:
- use an API Gateway
  - use GraphQL on the backend side to aggregate the calls and let the front-end calls only one end point
  - create a BFF (backend for frontend) to aggregate the API calls
  - use an API Gateway as AWS API Gateway to aggreagate the API calls
  
## Performance
The problem of performance is created for the API that should be called multiple times and the amount of data.

### Solution
The app already try improve the performance using [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) to load data asynchronous, a [web work](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to get some data in background and [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to keep data on the client side.

Other solutions are:
- use an API Gateway to solve the N + 1 problem already will improve the performance
- server-side render
  - use a tool as [next.js](https://nextjs.org/)
  - use AWS Lambda functions and S3 to create HTML pages and serve the client with raw HTML
- [Firebase](https://firebase.google.com/): the API uses Firebase which allows subscribe to new data and can help to get less data with other approaches as localstorage and web worker

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
