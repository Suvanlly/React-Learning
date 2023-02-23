import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const fetchData = () => 
  axios({
    method: 'GET',
    url:'https://api.publicapis.org/entries#'
  })

function App() {
  const [data, setData] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [jsonData, setJsonData] = useState("")

  useEffect(() => {
    fetchData()
    .then((res) => {
      const listData = res.data.entries.slice(0,10)
      setData(listData)
      setJsonData(JSON.stringify(listData))
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(data)

  return (
    <div className='body-wrapper'>
      hello, the data are 
      <button onClick={() => setIsShow(!isShow)}>Click this button</button>

      <div>{jsonData}</div>

      {isShow ? data.map((item, index) => {
        return (
          <div key={index} className="wrapper">
            <p>API: {item.API}</p>
            <p>Category: {item.Category}</p>
          </div>
        )
      }) : <p>Please click button</p>
    }
    </div>
  );
}

export default App;
