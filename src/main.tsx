import React from 'react'
import ReactDOM from 'react-dom/client'
import {ProductList} from "./components/ProductList/ProductList.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>,
)
