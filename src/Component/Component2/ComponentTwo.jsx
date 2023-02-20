import React from 'react'
import  styles  from "./component.module.css"
import { useEffect ,useState } from 'react'

function ComponentTwo() {
    const [ data , setData] = useState([])

    const fetchData = () =>{
        fetch("http://localhost:3003/posts")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch((err) => console.log(err))
    
        }

    useEffect(() => {
        fetchData()
    },[])
    // ImageUrl
// ShortDesc

  return (
    <div className={styles.MainContainer}>
        <h2>Classes</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam vero maiores iure eum numquam quaerat earum consectetur sint, ullam debitis repellat blanditiis quasi</p>
        <div className={styles.grid}>
            {data.map((product) => (
                <div className={styles.container} key={product.ID}>
                    <img src={product.ImageUrl} alt="" />
                    <h3>{product.Name}</h3>
                    <p>{product.ShortDesc}</p>
                    <button className={styles.button}>view more</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ComponentTwo