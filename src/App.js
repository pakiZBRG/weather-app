import React from 'react';
import Wrapper from './components/Wrapper';
import Main from './components/Main';
import FiveDay from './components/5day'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/5day' component={FiveDay}/>
      </Switch>
    </Wrapper>
  );
}

export default App;
