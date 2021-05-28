
1. This answer is to provide enough information to not change/mutate the state directly in React.
React follows Unidirectional Data Flow. Meaning, the data flow inside react should and will be expected to be in a circular path.

React's Data flow without flux

https://i.stack.imgur.com/vMjZQ.png

To make React work like this, developers made React similar to functional programming. The thumb rule of functional programming is immutability. Let me explain it loud and clear.

How does the unidirectional flow works?

states are a data store which contains the data of a component.
The view of a component renders based on the state.
When the view needs to change something on the screen, that value should be supplied from the store.
To make this happen, React provides setState() function which takes in an object of new states and does a compare and merge(similar to object.assign()) over the previous state and adds the new state to the state data store.
Whenever the data in the state store changes, react will trigger an re-render with the new state which the view consumes and shows it on the screen.
This cycle will continue throughout the component's lifetime.

If you see the above steps, it clearly shows a lot of things are happening behind when you change the state. So, when you mutate the state directly and call setState() with an empty object. The previous state will be polluted with your mutation. Due to which, the shallow compare and merge of two states will be disturbed or won't happen, because you'll have only one state now. This will disrupt all the React's Lifecycle Methods.

As a result, your app will behave abnormal or even crash. Most of the times, it won't affect your app because all the apps which we use for testing this are pretty small.

And another downside of mutation of Objects and Arrays in JavaScript is, when you assign an object or an array, you're just making a reference of that object or that array. When you mutate them, all the reference to that object or that array will be affected. React handles this in a intelligent way in the background and simply give us an API to make it work.

Most common errors done when handling states in React

// original state
this.state = {
  a: [1,2,3,4,5]
}

// changing the state in react
// need to add '6' in the array

// bad approach
const b = this.state.a.push(6)
this.setState({
  a: b
}) 
In the above example, this.state.a.push(6) will mutate the state directly. Assigning it to another variable and calling setState is same as what's shown below. As we mutated the state anyway, there's no point assigning it to another variable and calling setState with that variable.

// same as 
this.state.a.push(6)
this.setState({})
Many people do this. This is so wrong. This breaks the beauty of React and is bad programming practice.

So, what's the best way to handle states in React? Let me explain.

When you need to change 'something' in the existing state, first get a copy of that 'something' from the current state.

// original state
this.state = {
  a: [1,2,3,4,5]
}

// changing the state in react
// need to add '6' in the array

// create a copy of this.state.a
// you can use ES6's destructuring or loadash's _.clone()
const currentStateCopy = [...this.state.a]
Now, mutating currentStateCopy won't mutate the original state. Do operations over currentStateCopy and set it as the new state using setState().

currentStateCopy.push(6)
this.setState({
  a: currentStateCopy
})
This is beautiful, right?

By doing this, all the references of this.state.a won't get affected until we use setState. This gives you control over your code and this'll help you write elegant test and make you confident about the performance of the code in production.

To answer your question,

Why can't I directly modify a component's state?

Yes, you can. But, you need to face the following consequences.

When you scale, you'll be writing unmanageable code.
You'll lose control of state across components.
Instead of using React, you'll be writing custom codes over React.
Immutability is not necessary thing because JavaScript is single threaded. But, It's a good to follow practice which will help you in the long run.
PS. I've written about 10000 lines of mutable React JS code. If it breaks now, I don't know where to look into because all the values are mutated somewhere. When I realized this, I started writing immutable code. Trust me! That's the best thing you can do it to a product or an app.

Hope this helps!

