//import logo from './logo.svg';
//import './App.css';
import AddTodo from './mycomponents/AddTodo';
import Footer from './mycomponents/Footer';
import {Todos} from './mycomponents/Todos'; //
import Header from './mycomponents/Header';

import react, { useState, useEffect} from 'react'; //useState is a hook

function App() {
  let iniitTodos;
  if (localStorage.getItem("todos")===null){
    iniitTodos=[]
  }
  else{
    iniitTodos= JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo)=>{
    console.log("I am onDelete of", todo);
  

  setTodos(todos.filter((e)=>{
     return e!==todo;
   }));
  
   localStorage.setItem("todos", JSON.stringify(todos));
}

const addTodo=(title, desc)=>{
  console.log("i am adding this todo, ", title,desc);
  let sno
  if(todos.length===0){
    sno=0;
  }
  else{
  sno= todos[todos.length-1].sno +1;
  }
  const myTodo={ sno:sno, title:title, desc:desc } 
  setTodos([...todos, myTodo]); //add
  console.log (myTodo);

}

const [todos, setTodos] = useState([iniitTodos])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])

/*
  const [todos, setTodos] = useState([
  //let todos =[
    { 
      sno:1,
      title: "go to the market",
      desc: "you need to go to the market to buy this item 1"
    },
    {
      sno:2,
      title: "go to the mall",
      desc: "you need to go to the mall to buy this item 2"
    },
    {
      sno:3,
      title: "go to the school",
      desc: "you need to go to the school to buy this item 3"
    }
  ]);


*/

  return (
    <>
    {/* Using Header component like an HTML tag */}
    <Header  title ='navgation bar' searchBar /> 
    <AddTodo  addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer />

    </>
   
  );

}
export default App;
//searchBar = {true} /> //js boolean value

//in todos {todo} hre we r passing javascript object as prop
//in header {title} hre we r passing javascript string as prop
//in header {searchBar} hre we r passing javascript boolean as prop
//prop is an object which contains all the props which r passed from parent to child component
//in header we r using propes.title to access the title prop
//in header we r using propes.searchBar to access the searchBar prop
//in header we r using conditional rendering to show the search bar only if the searchBar prop is true
//in header we r using bootstrap for styling
//here is parent is App.js and child is header.js and todos.js and footer.js
//because header.js and todos.js and footer.js r imported in App.js


  //use state is a function which returns an array of two elements
  //first element is the current state 
  //second element is a function which is used to update the state
  //we can use this function to update the state of the component
  //we can pass an initial state to the useState function
  //when we update the state using the setTodos function the component will re-render
  //and the new state will be reflected in the component
  //we can pass any type of data to the useState function like string, number, array, object etc.
  //here we are passing an array of objects as initial state


    //obj 
  //use state is a hook which is used to manage the state of the component 
//filter is a higher order array method which is used to filter the array based on the condition

  //it will filter out the todo which is deleted and return the new array of todos
  //and then setTodos will update the state of todos with the new array of todos
  //and then the component will re-render with the new array of todos