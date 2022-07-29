import { React, useEffect } from '@vendors/react'
import {
  Routes,
  Route,
  useLocation
} from '@vendors/react'

import './css/style.scss'
//import './charts/ChartjsConfig'

import { LoginPage } from '@pkgs/auth/LoginPage.mjs'
import { BrowserRouter } from '@vendors/react/react.mjs'

export const App = () => {

  const location = useLocation()

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>

  )
}

