import React,{useState,useEffect} from 'react';

const Home=()=>{
const [data,setData]=useState([]);

useEffect(()=>{
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
    .then(res=>res.json())
    .then(json=>{
        setData(json["Time Series (5min)"]);
    })
},[])
console.log(data);
return(
    <div>
      <table style={{"borderWidth":"2px", 'borderColor':"black", 'borderStyle':'solid'}}>
          <tbody>
              <tr>
                  <th>DateTime</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Close</th>
                  <th>Volume</th>
              </tr>
          {
            Object.keys(data).map(key=>{
                console.log(key["1. open"])
              return (
                <tr >
                    <td>{key}</td>
                  <td>{data[key]["1. open"]}</td>
                  <td>{data[key]["2. high"]}</td>
                  <td>{data[key]["3. low"]}</td>
                  <td>{data[key]["4. close"]}</td>
                  <td>{data[key]["5. volume"]}</td>
                
                </tr>
              );
            })
          }
          </tbody>
        </table>
     </div>
    )
}

export default Home;