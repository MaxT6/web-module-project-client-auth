import React, {useEffect, useState} from "react";
import axios from 'axios'

export default function FriendsList(props) {
  const[friends, setFriends] = useState([])

  const getData = () => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: localStorage.getItem("token")
      }
    })
    .then(res => {
      console.log(res.data)
      setFriends(res.data)
    })
  }

  const formatData = () => {
    const friendsArr = []
    friends.forEach((friend, index) => {
      return friendsArr.push({
        id: index,
        name: friend.name,
        age: friend.age
      })
    }); console.log("FriendsArr",friendsArr)
  }

  useEffect(() => {
     getData();
  }, [])

  const friendsList = formatData();

  return (
    
    <div>
      {friendsList ?? [].map(friend => (
        <div>
          <p>{friend.name}</p>
        </div>
      ))}
      <h1>Friends List!</h1>
    </div>
  )
}