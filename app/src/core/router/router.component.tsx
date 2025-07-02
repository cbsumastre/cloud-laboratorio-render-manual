import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { switchRoutes } from './routes'
import { HomeScene } from '#scenes/home.scene'

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
      </Routes>
    </HashRouter>
  )
}
