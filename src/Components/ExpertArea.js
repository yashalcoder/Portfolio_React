import React from 'react'
import expres from "../images/icons8-express-js-48.png";
import mong from "../images/icons8-mongo-db-48.png";
import html from "../images/icons8-html-48.png";
import css from "../images/icons8-tailwindcss-48.png";
import react from "../images/icons8-react-a-javascript-library-for-building-user-interfaces-48.png";
import node from "../images/icons8-nodejs-48.png";
function ExpertArea() {
    const expert=[
        {imgs:html,ename:"HTML"},
        {imgs:css,ename:"TailwindCSS"},
        {imgs:react,ename:"ReactJS"},
        {imgs:node,ename:"NodeJS"},
        {imgs:expres ,ename:"Express"},
        {imgs:mong,ename:"MoongoDB"},
    
      ]
  return (
    <div>
      <h1 className="font-poppins font-bold text-lg p-4">My Expert Area</h1>
        <div className="grid grid-cols-3 pl-6">
          {
            expert.map((data,index)=>(
              <div key={index} className="py-2">
                <img src={data.imgs} className="py-3"/>
                <h1>{data.ename}</h1>
              </div>
            ))
          }
        </div>     
    </div>
  )
}

export default ExpertArea
