import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginContainer from './containers/LoginContainer'
import LinkBtn from './components/LinkBtn'
import ContactsContainer from './containers/ContactsContainer'
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
          <Route path="/contacts" component={ContactsContainer} />
          <Route path="/login" component={LoginContainer} />
        </Switch>
      </div>
    </div>

)

export default App
