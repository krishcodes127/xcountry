import { useEffect,useState } from "react";
function CountryCard(flagUrl,name){
return (
    <div
     style={{
      border:"1px solid gray",
      borderRadius:"10px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      padding:"10px",
      height:"250px",
      width:"250px",
      textAlign:"center",

     }}
     >
    <img src= {flagUrl} alt={`Flag of ${name}`} style={{
    height:"50px",
    width:"50px",
    }}/>
    <h2>{name}</h2>
    </div>
);
}



const Countries = () => {
    const API_URL ="https://xcountries-backend.azurewebsites.net/all";
    const [Countries,SetCountries] = useState([]);
    
   // console.log({countries});


    
    useEffect(() =>{
     fetch(API_URL)
     .then((res)=> res.json())
     .then((data) => SetCountries(data))
     .catch((error) => console.error("Error fetching data:"+ error));
   
     
    },[])
    //const array =[1,2,3,4,5,6,7,8,9,10];  
 
    return (

   <div style ={{
    display:"flex",
    flexWrap:"wrap",
    gap:"10px",
    alignItems:"center",
    justifyContent:"center"
}}>
    <h1>Countries</h1>
    {Countries.map((country) => (
     <CountryCard 
     name={country.name} 
     flagUrl={country.flag} 
     key={country.abbr}/>   
        ))}
    
</div>
);
};

export default Countries;