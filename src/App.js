import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginContainer from './containers/LoginContainer'
import LinkBtn from './components/LinkBtn'
import ContactListContainer from './containers/ContactListContainer'
import './App.css'


const App = () => (

    <div className="app">
      <header className="header">
        <div className="top-menu">
          <LinkBtn to="/login" label={'Логин'} />
        </div>
      </header>

      <hr />
      <div className="content">
        <Switch>
          <Route path="/contacts" component={ContactListContainer} />
          <Route path="/login" component={LoginContainer} />
        </Switch>
      </div>
    </div>

)

export default App
