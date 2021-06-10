1. not mutate state directly


-> https://daveceddia.com/why-not-modify-react-state-directly/


-> https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really


2. Second argument in Setstate
The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is re-rendered. componentDidUpdate should be used instead to apply such logic in most cases. You may directly pass an object as the first argument to setState instead of a function.


3. In practice, componentDidMount is the best place to put calls to fetch data, for two reasons: Using didMount makes it clear that data won't be loaded until after the initial render. ... Putting your API call code in componentDidMount will ensure that data is only fetched from the client, where it should be. componentDidMount will only be called once after the first render

4. A "side effect" is anything that affects something outside the scope of the function being executed. These can be, say, a network request, which has your code communicating with a third party (and thus making the request, causing logs to be recorded, caches to be saved or updated, all sorts of effects that are outside the function.

There are more subtle side effects, too. Changing the value of a closure-scoped variable is a side effect. Pushing a new item onto an array that was passed in as an argument is a side effect. Functions that execute without side effects are called "pure" functions: they take in arguments, and they return values. Nothing else happens upon executing the function. This makes the easy to test, simple to reason about, and functions that meet this description have all sorts of useful properties when it comes to optimization or refactoring.

Pure functions are deterministic (meaning that, given an input, they always return the same output), but that doesn't mean that all impure functions have side effects. Generating a random value within a function makes it impure, but isn't a side effect, for example. React is all about pure functions, and asks that you keep several lifecycle methods pure, so these are good questions to be asking.

5. case ADD_ITEM :
    return { 
        ...state,
        arr: [...state.arr, action.newItem]
    }
----------------------------------------------------------------------------------------------------------------------------------------------
1. react-learning: https://github.com/learncodeacademy/react-js-tutorials
2. https://www.youtube.com/watch?v=1iAG6h9ff5s&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&index=6

---------------------------------------------------------------------------------------------------------------------------------------------

Flux is a patteren
1. where the component fire the action and lister to store
all store will get all events but only react to the required events

-------------------------------------------------------------------

## Fetch
```js
fetchPost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
    .then((data)=> data.map((el)=>(
      {
        userId: `${el.userId}`,
        title: `${el.title}`  
      }
    )))
    .then((contact)=> this.setState({
      isLoading: false,
      contact
    }))
    .catch((error)=> console.log("falied to load the data", error))
  }
 ```
