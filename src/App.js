import React from 'react'
import AppRouter from './router/AppRouter'
import AuthProvider from './context/AuthProvider'
import ProductProvider from './context/ProductProvider'

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <AppRouter />
      </ProductProvider>
    </AuthProvider>
  )
}

export default App