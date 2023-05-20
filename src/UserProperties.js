import React, {useEffect, useState} from 'react'
import axios from 'axios';

function UserProperties() {
  const [property, setProperty] = useState({});
  let userId;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:5000/property/${userId}`);
      console.log(data);
      setProperty(data);
      console.log(property);
    };

    fetchData();
    console.log(property);
  }, []);
  return (
    <div>UserProperties</div>
  )
}

export default UserProperties