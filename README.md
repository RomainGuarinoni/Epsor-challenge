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

2. Install NPM packages
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

   You need to build the container the first time you run the backend :

   ```sh
   docker-compose up --build
   ```
