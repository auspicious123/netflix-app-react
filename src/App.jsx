import React from 'react';
import Card from "./Card";
import Sdata from './Sdata';
import Images from './Images';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries="netflix";

// const FavS=()=>{
  // if(favSeries==="netflix"){
  //   return <Netflix/>;
  // }else{
  //   return <Amazon/>;
     
  // }
// };


const App=()=>(
    <>
      <h1 className='heading_style'> List of top 5 Netflix Series in 2022 </h1>
      {/* <FavS/> */}
      {(favSeries==="netflix")?<Netflix/>:<Amazon/>}
      {/* {Sdata.map((val, index) =>{
        console.log(index);
        return(
          <Card
            key={val.id}
            imgsrc={val.imgscr}
            title={val.title}
            sname={val. sname}
            link={val.links}
          />
        );
      })} */}
    </>

);

export default App;