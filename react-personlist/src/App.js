import React from 'react';
import './App.css';
const App=()=>(<PersonList/>);
const PersonList=()=>{
  const people=[
    {
      img:23,
      name:'john',
      job:'Devloper'
    },
    {
      img:35,
      name:'Peter',
      job:'Designer'
    },
    {
      img:56,
      name:'Smith',
      job:'Analyst'
    }
   
  ];
  return (
  <section>
    <Person person={people[0]}/>;
    <Person person={people[1]}/>;
    <Person person={people[2]}/>;
  </section>
  )};

const Person=props=>{
  // const {img,name,job}=props.person;
  // const children=props;
  const url=`https://randomuser.me/api/portraits/thumb/men/${props.person.img}.jpg`;
  return(
    <div className="person">
      <img src={url} alt="person not found"></img>
      <div>
        <h4>{props.person.name}</h4>
        <h4>{props.person.job}</h4>
      </div>
    </div>
  )
};

export default App;
