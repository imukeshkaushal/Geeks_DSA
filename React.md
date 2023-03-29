## Q.1 What are closures with examples?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state  (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

```
*** 
Q.2. What is meant by higher-order function?

A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. There are several different types of higher order functions like map and reduce. 

***

Q.3. Difference between Var Let and const.

- Var : 1.  Can be redeclared,  2. Can be reassigned a value	3. Only have global and function scope   4. Variables are hoisted on top and can be used anywhere   5. Can be redeclared anywhere in the program

- Let : 1. Cannot be redeclared	    2. Can be reassigned a value	3. Can have a block scope	4. Variables must be initialized before use	 5. Can be redeclared inside a block

- Const : 1. Can be redeclared inside a block	2. Cannot reassign the value  3. Can have a block scope
4. Variables must be initialized before use     5. Can never be redeclared

***


Q.4. What is call, apply and bind?

-  The call, bind and apply methods can be used to set the this keyword independent of how a function is called.

- The bind method creates a copy of the function and sets the this keyword, while the call and apply methods sets the this keyword and calls the function immediately.


***

Q.5. Difference between map and ForEach?

The map() method returns a new array, whereas the forEach() method does not return a new array. The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.


***

Q.6. What is Hoisting?

Hoisting is JavaScript's default behavior of moving declarations to the top.

***


                            ## React Part


***

Q.1. What are hooks?

Hooks allow us to "hook" into React features such as state and lifecycle methods.

***

Q.2. What are useEffect and useRef?

- UseEffect :  The useEffect Hook allows you to perform side effects in your components. useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

- Examples : fetching data, directly updating the DOM, and timers.


- UseRef : The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.  It can be used to access a DOM element directly.

***

Q.3. What is the difference between useState and useEffect?

- UseState : The React useState Hook allows us to track state in a function component.

- UseRef : The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.  It can be used to access a DOM element directly.

***


Q.4. What is a rest operator?

- The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array. The rest operator also allows us in destructuring array or objects.

***

Q. 5. What is the spread operator?

- The spread operator (…) allows us to expand an iterable like array into its individual elements.

***

Q.6. What is Memoiazation?

- Memoization is an optimization technique for accelerating computer programs by caching the results of heavy function calls and returning them when similar inputs are encountered repeatedly. Simply, React memoization is similar to caching.

***

Q.7. What is Redux?

- Redux is an open-source JavaScript library used to manage application state. React uses Redux for building the user interface. It was first introduced by Dan Abramov and Andrew Clark in 2015.

- It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. 

***

Q.8. What is the difference between FrameWork and Library?

- A framework :  is a set of pre-written code that provides a structure for developing software applications. 

- library : on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

***

Q.9. What are callback functions?

- A callback is a function passed as an argument to another function

- his technique allows a function to call another function

- A callback function can run after another function has finished


***

Q.10. What do you mean by JSX?

- JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

***

Q.11. - What is the difference between redux and context API?

- Redux is a complete state manager capable of allowing an app to undo/redo actions and provides advanced developer tooling for debugging. Context API is designed as a dependency injection mechanism that allows making data available through the component tree without being manually passed.

***

Q.12. Explain Async Await.

- Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.

- Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

***

Q.13. What is Node.js?

- Node.js is an open source server environment
- Node.js is free
- Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
- Node.js uses JavaScript on the server

***

Q.14. What is OOPS?

- Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

***

Q.15. What is Mounting in React?

- Mounting means putting elements into the DOM.

- React has four built-in methods that gets called, in this order, when mounting a component:

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()


***

Q.16. What is Unmounting in React?

- The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

- React has only one built-in method that gets called when a component is unmounted:

- componentWillUnmount()

***

Q.17. What is Local storage?

- LocalStorage is a data storage type of web storage. This allows the JavaScript sites and apps to store and access the data without any expiration date.

***

Q.18. What is Session Storage?

- Session storage allows you to store data in the browser depending on the system memory and the data stored in the browser until the browser is closed.

***

Q.19. What is UseContext Hook?

- “useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. 

***


Q.20. What is UseMemo?

- useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

- Example : const cachedValue = useMemo(calculateValue, dependencies)

***


Q.21. What useCallback?

- useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

***

Q.22. What is Prop-Drilling?

- Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.

***

Q.23. What are class in CSS?

- A CSS class is an attribute used to define a group of HTML elements in order to apply unique styling and formatting to those elements with CSS.

***

Q.24. What is React-Router-Dom?

- React Router DOM enables you to implement dynamic routing in a web app.

***

Q.25. What is Vertual Dom?-


        HTML


Q.1. What is HTML ? 


HTML stands for HyperText Markup language. It is a standard text formatting language used for developing web pages released in 1993. HTML is a language that is interpreted by the browser and it tells the browser what to display and how to display.


***


Q.2. What are Tags and Attributes in HTML ?

Tags are the primary component of the HTML that defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element. For example, <p align=” center”>Interview questions</p>, in this the ‘align’ is the attribute using which we will align the paragraph to show in the center of the view.

***


Q.3. What are void elements in HTML?

HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example <br />, <img />, <hr />, etc.

***


Q.4. What is the ‘class’ attribute in HTML?

The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements.

***

Q.5. What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?

Multiple elements in HTML can have the same class value, whereas a value of id attribute of one element cannot be associated with another HTML element.

*** 

Q.6. What are HTML Positions?

There are mainly 7 values of position attribute that can be used to position an HTML element:

static: Default value. Here the element is positioned according to the normal flow of the document.

absolute: Here the element is positioned relative to its parent element. The final position is determined by the values of left, right, top, bottom.

fixed: This is similar to absolute except here the elements are positioned relative to the <html> element.

relative: Here the element is positioned according to the normal flow of the document and positioned relative to its original/ normal position.

initial: This resets the property to its default value.

inherit: Here the element inherits or takes the property of its parent.

***

Q.7. How many ways to display HTML Elements ?

inline: Using this we can display any block-level element as an inline element. The height and width attribute values of the element will not affect.

block: using this, we can display any inline element as a block-level element. 

inline-block: This property is similar to inline, except by using the display as inline-block, we can actually format the element using height and width values.

flex: It displays the container and element as a flexible structure. It follows flexbox property.

inline-flex: It displays the flex container as an inline element while its content follows the flexbox properties.

grid: It displays the HTML elements as a grid container.

none: Using this property we can hide the HTML element.

***

Q.8.  What is the difference between “display: none” and “visibility: hidden”, when used as attributes to the HTML element.

When we use the attribute “visibility: hidden” for an HTML element then that element will be hidden from the webpage but still takes up space. Whereas, if we use the “display: none” attribute for an HTML element then the element will be hidden, and also it won’t take up any space on the webpage.

Q.9. What is CSS?

CSS stands for Cascading Style Sheet. It’s a style sheet language that determines how the elements/contents in the page are looked/shown. CSS is used to develop a consistent look and feel for all the pages.

Q.10. What are the different types of Selectors in CSS?

1. Universal Secelector
2. Element Type Selector
3. ID Selector
4. Class Selector
5. Descendant Combinator
6. Child Combinator
7. General Sibling Combinator
8. Adjucent Sibling Combinator
9. Atrribute Selector

***

Q.11. What is the difference between inline, inline-block, and block?

Block Element: The block elements always start on a new line. They will also take space for an entire row or width. List of block elements are div, p.

Inline Elements: Inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are a span strong, img tags. 

Inline Block Elements: Inline-block elements are similar to inline elements, except they can have padding and margins and set height and width values.

***

Q.12. What are Pseudo elements and Pseudo classes?

```

Pseudo-elements allows us to create items that do not normally exist in the document tree, for example ::after.

::before
::after
::first-letter
::first-line
::selection
In the below example, the color will appear only on the first line of the paragraph.

p: :first-line {
	color: #ffOOOO;
	font-variant: small-caps;
}
Pseudo-classes select regular elements but under certain conditions like when the user is hovering over the link.

:link
:visited
:hover
:active
:focus
Example of the pseudo-class, In the below example, the color applies to the anchor tag when it’s hovered.

/* mouse over link */
a:hover {
	color: #FFOOFF;
}

```









