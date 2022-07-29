import { HelmetProvider, React, renderToString } from '@vendors/react'
//import { writeFile } from 'node:fs/promises'
import { App } from './App.mjs'
import { LoginPage } from '@pkgs/auth/LoginPage.mjs'
import { StaticRouter, Route, Routes } from '@vendors/react'
import { DashboardPage } from '@pkgs/dashboard/DashboardPage.mjs'

const jsx = (location) =>
  (<React.StrictMode>
    <StaticRouter location={location}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StaticRouter>
  </React.StrictMode>)

const login = renderToString(jsx('/'))

console.log({ login })

const dash = renderToString(jsx('/dash'))

//await writeFile('./dash.html', dash)

console.log({ dash })
