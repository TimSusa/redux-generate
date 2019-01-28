# redux-generate
Tiny library that generates actions out of your types

# Install

```
yarn add redux-generate
``` 

or 

``` 
npm i --save redux-generate
```


# Usage

[x] Create a folder, where your actions should be generated

[x] Create a file "my-custom-action.js" in that folder, which should look kind of this:

``` 
import { generateActions, createActionTypes } from 'generate-actions'

const typeSliderList = [
  'HANDLE_STUFF',
  'DO_SOMETHING',
]

export const ActionTypes = createActionTypes(typeSliderList)

export const Actions = { ...generateActions(ActionTypes) 
}

```  

- Create folder for your reducers
- Create a file: "my-custom-reducer.js", which should look like that:

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