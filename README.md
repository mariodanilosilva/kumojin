# Kumojin

### Description
Kumojin test was developed with [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) on the backend and [Vue.js](https://v3.vuejs.org/) on frontend. [Jest](https://jestjs.io/) was used as a test tool.

## Project configuration
First, install Docker and Docker Compose on your machine. Here are links to detailed installation instructions:
- https://docs.docker.com/engine/install/
- https://docs.docker.com/compose/install/

Then, run the following command, this command will create the containers with the Node.js backend and the Vue.js frontend.
```bash
docker-compose up -d
```

## Access
The project frontend was set to run on port 80, access the browser [http://localhost](http://localhost).

The project backend was set to run on port 3000, access the browser [http://localhost:3000/timezone](http://localhost:3000/timezone).

## Run the tests
It's necessary to enter the frontend and backend folders and run the following command:

```
npm run test
```


### Stay in touch
- Author - [Mário Silva](https://www.linkedin.com/in/mariodanilosilva/)