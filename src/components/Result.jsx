import React, {useState, useEffect} from 'react'

//outils
import stringSimilarity from "string-similarity";

export default function Result({ url1, url2 }) {

  const [data, setData] = useState(0)

  let comparString = stringSimilarity;

  

  const result = (url1, url2) => {
    let percent = stringSimilarity.compareTwoStrings(url1, url2);
    let formatPercent = percent * 100
    setData(formatPercent);
    // console.log(data)
  }

  useEffect(()=>{
    result(url1, url2)
  },[data])



  return (
    <div>
      {data+`%`}
    </div>
  )
}
