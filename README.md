1. not mutate state directly


-> https://daveceddia.com/why-not-modify-react-state-directly/


-> https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really


2. Second argument in Setstate
The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is re-rendered. componentDidUpdate should be used instead to apply such logic in most cases. You may directly pass an object as the first argument to setState instead of a function.
