import "reflect-metadata"
import type { MetaFunction } from "remix"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix"
import { registerToContainer } from '~/injections'

registerToContainer()

export const meta: MetaFunction = () => {
  return { title: "Relation Diagram" }
}

export default function App() {
  return (
    <html lang="ja">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <Meta/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Links/>
    </head>
    <body>
    <Outlet/>
    <ScrollRestoration/>
    <Scripts/>
    <LiveReload/>
    </body>
    </html>
  )
}
