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

###Initialize DB

```sh
npx prisma format
npx prisma db push
```

### Migration

```sh
npx prisma format
npx prisma migrate dev
```

### DB Connection

Add .env
```
DATABASE_URL="postgresql://developer:password@localhost:5432/devdb?schema=public"
```

## Debugging

To enable all prisma debugging options, set DEBUG to prisma*:

```
export DEBUG="prisma*"
```

To enable all debugging options, set DEBUG to *:

```
export DEBUG="*"
```

## Diagram
- https://github.com/ts-graphviz/ts-graphviz
- https://github.com/mdaines/viz.js
