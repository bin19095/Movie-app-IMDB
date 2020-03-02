import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

import { faHandPointRight as farHandPointRight } from '@fortawesome/free-regular-svg-icons';


class Like extends Component{
    constructor() {
        super();
        this.state={
            lkbtn:false

        }
    }
    liked =()=>{
        this.setState(prevstate=>({
                lkbtn:!prevstate.lkbtn
            })
        );
    }
    render()
    {
        let hand=undefined;
        (!this.state.lkbtn)?
            hand=farHandPointRight


            :hand=faHandPointRight;



        return (
            <>

                <FontAwesomeIcon icon={hand} onClick={()=>this.liked()} style={{color: "grey"}} size="2x"/>



            </>
        );
    }
}
export default Like