# RD version 0 (Prototype)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.


## DB

Initialize DB:

```sh
npx prisma format
npx prisma db push
```


## Diagram
- https://github.com/ts-graphviz/ts-graphviz
- https://github.com/mdaines/viz.js