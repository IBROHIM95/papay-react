
import React from 'react';
import { BestDishes } from "./bestDishes";
import { TopRestaurant } from "./topRestaurants";
import { BestRestaurant } from "./bestRestaurants";
import { Statistics } from "./statistics";
import { Events } from "./events";
import { Advertisement } from "./advertisement";
import { Recommendations } from "./recommendatios";
import '../../css/home.css'

export function HomePage() {
    return (
        <div className="homepage"  >
        
         <Statistics/>  
         <TopRestaurant/> 
         <BestRestaurant/>
         <BestDishes/>
         <Advertisement/>
         
         <Events/>
         
         <Recommendations/>
       
        </div>
        
    )
}