import "reflect-metadata"
import { registerToContainer } from '~/injections'
import type { MetaFunction } from "remix"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix"
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

registerToContainer()

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#994455',
    },
  },
})


export const meta: MetaFunction = () => {
  return { title: "Relation Diagram" }
}

export default function App() {
  return (
    <html lang="ja">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1, width=device-width"/>
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
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <Outlet/>
    </ThemeProvider>
    <ScrollRestoration/>
    <Scripts/>
    <LiveReload/>
    </body>
    </html>
  )
}
