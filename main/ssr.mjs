import { React, renderToString } from '@vendors/react'
// import { App } from './App.mjs'
import { LoginPage } from '@pkgs/auth/LoginPage.mjs'
import { StaticRouter, Route, Routes } from '@vendors/react'

const resp = renderToString(<React.StrictMode>
  <StaticRouter location={"/"}>
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </StaticRouter>
</React.StrictMode>)

console.log({ resp })
