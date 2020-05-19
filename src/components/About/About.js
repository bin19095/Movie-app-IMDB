import React from "react";
import Tabs from "./tlayout/Tabs";
import '../Styles/style.css';
import Book from '../../img/Book.jpeg';
export const About= () =>{
const contstyle={
    color:'#000',
    fontSize:'25px',
    backgroundColor:'rgb(255,255,255,0.3)'
}
    return(
        <div className="abcont">
            <Tabs>
                <div  label="Event & Festivals">
                    <div className="">
                        This Content is About IMDM Using self built Tab without using any plugins.
                        <img src={Book}/>



                    </div>



                </div>
                <div  label="Session">
                  <p className={contstyle}>
                      Invisible <em>Maru</em>
                  </p>

                </div>
                <div label="Promotion">
                    Vadlmir offerings <em>Dota Hero</em>
                </div>
                <div label="How To Get There?">
                    Vadlmir offerings <em>Dota Hero</em>
                </div>
            </Tabs>
        </div>
    );
};