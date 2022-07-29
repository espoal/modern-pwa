import { HelmetProvider, React, renderToString } from '@vendors/react'
// import { App } from './App.mjs'
import { LoginPage } from '@pkgs/auth/LoginPage.mjs'
import { StaticRouter, Route, Routes } from '@vendors/react'
import { DashboardPage } from '@pkgs/dashboard/DashboardPage.mjs'


const login = renderToString(<React.StrictMode>
  <StaticRouter location={"/"}>
    <HelmetProvider>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dash" element={<DashboardPage />} />
    </Routes>
    </HelmetProvider>
  </StaticRouter>
</React.StrictMode>)

console.log({ login })

const dash = renderToString(<React.StrictMode>
  <StaticRouter location={"/"}>
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dash" element={<DashboardPage />} />
      </Routes>
    </HelmetProvider>
  </StaticRouter>
</React.StrictMode>)

console.log({ dash })
