import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { RecoilRoot } from 'recoil'
const Loading = () => {
  return (
    <main>
      <h2>
        Loading...
      </h2>
    </main>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>} >
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Suspense>

  </React.StrictMode>
)
