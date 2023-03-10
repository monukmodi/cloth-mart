import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/homPage'
import ShopPage from './pages/shop/shop'

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
