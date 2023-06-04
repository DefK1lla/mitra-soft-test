import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ROUTES from './routes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(r => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
