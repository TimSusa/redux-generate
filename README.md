# Redux Generate
Tiny library that generates sync actions and reducers out of giving one source of truth. It can be used together with async actions along "Redux-Thunk"

## Install

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
### Create Reducer

- Create a file: "my-custom-reducer.js", which should look like this:

``` 
import {generateReducers} from 'redux-generate-actions'
import { Actions } from '../actions/my-custom-actions.js'

export const reducers = {
  [Actions.HANDLE_STUFF](state, action) {
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

### Combine Reducers (just like usual)

``` 
import { combineReducers } from 'redux'

import * as myCustomReducer from './my-custom-reducer'

export default combineReducers({
  ...myCustomReducer
})

``` 

### Apply store to your app
After that you would provide the state to your app via store, just like usual: https://redux.js.org/basics/store#store



## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/TimSusa/redux-generate/badge.svg?style=beer-square)](https://beerpay.io/TimSusa/redux-generate)  [![Beerpay](https://beerpay.io/TimSusa/redux-generate/make-wish.svg?style=flat-square)](https://beerpay.io/TimSusa/redux-generate?focus=wish)
