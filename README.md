# Redux Generate
Tiny library that generates sync actions and reducers out of giving one source of truth. You don´t have to implement all the actions for yourself. Redux-Generate will do that for you. Of course, it can be used along with async actions via "Redux-Thunk", for example.

## Installation

```
yarn add redux-generate
``` 

or 

``` 
npm i --save redux-generate
```


## Usage

### Create Actions
- In your project´s source root create a file for your actions. For example: "my-custom-action.js", which should look like this:

``` 
import { generateActions, createActionTypes } from 'redux-generate'

const typeSliderList = [
  'HANDLE_STUFF',
  'DO_SOMETHING',
]

export const ActionTypes = createActionTypes(typeSliderList)

export const Actions = { ...generateActions(ActionTypes) 
}

```  

You don´t have to implement all the actions for yourself. Redux-Generate will do that for you. Just keep in mind, that later on in your app you can call your action like this. We do an agreement by simplifying the action to have not more than one parameter, which should be an object or undefined otherwise:

``` 
handleStuff({stuff})
doSomething()
``` 

### Create Reducers

- Create a file: "my-custom-reducer.js", which should look like this:

``` 
import {generateReducers} from 'redux-generate'
import { Actions } from '../actions/my-custom-actions.js'

export const reducers = {
  [Actions.HANDLE_STUFF](state, action) {
    const {stuff} = action.payload
    ...
    return state
  },

  [Actions.DO_SOMETHING](state, action) {
  ...
    return {
      ...state,
    }
  },
}

export const sliders = generateReducers([], reducers)

```  

Payload can be accessed as usual via action.payload.


### Combine Reducers (just like usual)
Best would be an index.js file beneath reducer definitions.

``` 
import { combineReducers } from 'redux'

import * as myCustomReducer from './my-custom-reducer'

export default combineReducers({
  ...myCustomReducer
})

``` 

### Apply store to your app
After that you can provide the state to your app via store, just like usual: https://redux.js.org/basics/store#store

### Bind Actions to your app (ReactJS)
In your app, you can bind actions and state to your components as usual.


``` 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


function MyComponent (props) {
  const { stuff, actions } = props
  .
  .
  .
  return (
    <div>Heal the world!</div>
  )
}


function mapStateToProps({funny: {stuff}}){
  return {
    stuff
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)
``` 



## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/TimSusa/redux-generate/badge.svg?style=beer-square)](https://beerpay.io/TimSusa/redux-generate)  [![Beerpay](https://beerpay.io/TimSusa/redux-generate/make-wish.svg?style=flat-square)](https://beerpay.io/TimSusa/redux-generate?focus=wish)
