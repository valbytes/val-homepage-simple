import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../assets/pageSections/Header/Header'
import Footer from '../assets/pageSections/Footer/Footer'
import Container from '@mui/material/Container'

import '../assets/style/style.css'

export const Route = createRootRoute({
  component: () => (
    <>
      <title>Val.bytes</title>
      <Container>
        <Header />
        <main>
          <Outlet />
        </main>
        <footer>
          <div className="footer-content"><Footer /></div>
        </footer>
      </Container>
      <TanStackRouterDevtools />
    </>
  ),
})
