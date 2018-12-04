import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Main from '../containers/Main'

const AppContainer = styled.div`
  /* width: 100%;
  height: 100%;
  height: 100%; */
  flex: 1;
  display: flex;

`

const App = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex'}}>
      <Router>
        <AppContainer>
           <Route exact path="/" render={() => <Main />} />
        </AppContainer>

      </Router>
    </div>
  )
}
export default App