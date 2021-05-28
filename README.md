1. not mutate state directly


-> https://daveceddia.com/why-not-modify-react-state-directly/


-> https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really


2. Second argument in Setstate
The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is re-rendered. componentDidUpdate should be used instead to apply such logic in most cases. You may directly pass an object as the first argument to setState instead of a function.


3. In practice, componentDidMount is the best place to put calls to fetch data, for two reasons: Using didMount makes it clear that data won't be loaded until after the initial render. ... Putting your API call code in componentDidMount will ensure that data is only fetched from the client, where it should be. componentDidMount will only be called once after the first render
