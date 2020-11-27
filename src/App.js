import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Person from "./component/Person";
import Lonely from "./component/Lonely";
import data from "./data.json";


const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDisLikedUsers] = useState([]);
  const activeUser = 0;

const removePersonFromDataSrc = (peopleSource, userId) =>
  peopleSource.filter(user => user.id !== userId);

const modifySuperficialChoices = (userId, action) => {
  const newPeople = [...people];
  const newLikedUsers = [...likedUsers];
  const newSuperLikedUsers = [...superLikedUsers];
  const newDislikeUsers = [...dislikedUsers];

  switch (action) {
    case 'ADD_T0_LIKED_USER': 
      if(!people[activeUser].likedUsers.includes(userId)) {
        newPeople[activeUser].likedUsers.push(userId);

        setLikedUsers(newLikedUsers);
        setPeople(removePersonFromDataSrc(people.userId));
      }
      break;
    case  'ADD_TO_DISLIKED_USER':
      if(!people[activeUser].dislikedUsers.includes(userId)){
        newPeople[activeUser].dislikedUsers.push(userId);
        newDislikeUsers.push(data[userId]);
        

        setDisLikedUsers(newLikedUsers);
        setPeople(removePersonFromDataSrc(people, userId));
      }
    case 'ADD_TO_SUPERLIKED_UERS':
      if(!people[activeUser].superLikedUsers.includes(userId)){
        newPeople[activeUser].superLikedUsers.push(userId);
        newSuperLikedUsers.push(data[userId]);

        setSuperLikedUsers(newLikedUsers);
        setPeople(removePersonFromDataSrc(people, userId));
      }
      break;

      default:
          return people;
    }
  };

  return(
    <div className="app">
      <Header />
 
      {people[1] ? (
        <Person
          key={people[1].id}
          person= {people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
          />

      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={likedUsers}
        />
      )}

    </div>
  );
};

export default App; 