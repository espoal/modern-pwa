import { React, createRoot, hydrateRoot, BrowserRouter, HelmetProvider } from '@vendors/react'
import { App } from './App'

const jsx = () =>
  (<React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>)

const container = document.getElementById('root')

const root = createRoot(container)
root.render(jsx())

//TODO: hydrateroot
/*hydrateRoot(
  document.getElementById('root'),
  jsx()
)*/


