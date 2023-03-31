# blui-database

This repo contains data used within the [Brightlayer UI Home](https://brightlayer-ui.github.io) documentation website.

The database is accessible in a JSON format and is enforced and built using typescript. It is served through the Github API. The `index.ts` is a Node.js script which is used to create the `/deployed` folder.

## For Contributors

To build and run the script used to create or update the database, update the roadmap in `/src` and run:

```sh
yarn && yarn start
```
