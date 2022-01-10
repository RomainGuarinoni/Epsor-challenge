# Epsor challenge

<div align="center">
  <a href="https://epsor.fr/">
    <img src="https://cdn-website.partechpartners.com/media/images/Epsor_Logo_Yellow.original.png" alt="Logo" >
  </a>
</div>

## Prerequisites

First of all, make sure you have the following dependencies install on your
computer :

- [docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [npm](https://docs.npmjs.com/getting-started/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repo

   SSH

   ```sh
   git clone git@github.com:RomainGuarinoni/Espor-challenge.git
   ```

   HTTPS

   ```sh
   git clone https://github.com/RomainGuarinoni/Espor-challenge.git
   ```

2. Install packages
   ```sh
   npm install
   ```
   or
   ```sh
    yarn install
   ```
3. Run the docker container

   ```sh
   docker-compose up
   ```

   > You need to build the container the first time you run it :

   ```sh
   docker-compose up --build
   ```

4. Open another terminal tab with `CTRL + ALT + T` and run this command to start
   the application :

> Wait until the docker-compose finished to start all the containers ( few
> seconds)

```sh
npm run dev
```

Wait until you see this log in the console :

```sh
💾 Connection to mongoDB successfull
✏️ Kafka book topic created
🗒️ Kafka consumer subscribed to book topic
🔌 Server is listening on http://localhost:3000
📕 graphql visualizer on http://localhost:3000/graphql

```

> This command might take few seconds to run because of the subscription of
> kafka consumer

5. Go the graphql visualizer http://localhost:3000/graphql

## FAQ

### The application can't connect to Kafka service

Sometimes, the Kafka container shuts down (you can see it in the docker-compose
terminal with a kafka message exiting with code 1).

In this case, just shut down the docker containers with `docker-compose down`
and reboot it with `docker-compose up`
