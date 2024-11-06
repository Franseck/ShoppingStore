import React from 'react'
import AppRouter from './router/AppRouter'
import AuthProvider from './context/AuthProvider'
import ProductProvider from './context/ProductProvider'
import Scroll from './components/Scroll'

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