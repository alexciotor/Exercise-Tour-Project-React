import {useEffect, useState} from 'react' 
 import Loading from './loading'
 import Refresh from './refresh'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false)
  const [data,setData] = useState([])

  const getData = async()=>{
try{
  setLoading(true)
  const response = await fetch(url)
  const data = await response.json()
  setData(data)
  setLoading(false)
}
catch(error){
  setLoading(true)
  console.log(error);
}
 
  }

  const list = (id)=>{
  const newTour = data.filter(item=>{
  if(id !== item.id ){
    return item
  } 
  
})
setData(newTour)
}
const reload =()=>{
  setData(data)
}
  useEffect(()=>{
  getData()
},[]) 

 if(loading){
   return (
     <main>
     <Loading/>
     </main>
   )
 }
 if(data.length===0){
   return (
     <main>
     <Refresh getData={getData}/>
     </main>
   )
 }

  return (
   <main>
   <div className="title">our tours   
   <div className="underline"></div>
   </div>
<div className="article-container">
{data.map(item=>{
  const {id,name,image,info,price}=item
  console.log(id);
  return <article key={id} className="article">
<header className="header">
<img className='img' src={image} alt={name}/>
</header>
<footer className="footer">
<h4 className="titles">{name}<span className="price">${price}</span></h4>
<p>{info}</p>
<button onClick={()=>{
  list(id)
}}  className="btn">Not Interested</button>
</footer>
</article>
})}

</div>
   </main>
  );
}

export default App;
