import React from 'react';
import {Button,Input,ListGroup, ListGroupItem } from 'reactstrap';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Like from "./plug/like";
const CommentList = (props) => {
const items =props.items;
    const style1={
        color:'white',
        fontWeight:'bold',
        fontFamily:'San-Serif, Cursive',
        backgroundColor:'grey',
        width:'70%',
        height:'100px',
        borderRadius:'10px'
    };
const commentLists = items.map(item=>{

    return (
        <div key={item.key}>

            <div>
                <input style={style1} type="textarea" id={item.key}
                       value={item.comment}
                          onChange={e=>{props.setUpdate(e.target.value,item.key)}
                }
                />



                <span onClick={()=>props.deleteItem(item.key)}>
                 <FontAwesomeIcon icon={faTrash} style={{ color: "white",marginLeft:'20px' }} size="1x"/>
                 <Button color="link">
                     Delete
                 </Button>

             </span>


            </div>
            <div>
                <Like/>
            </div>

        </div>

    );

});
return(
    <div>
        {
            commentLists
        }
    </div>
);


};

/*ListGroup.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // boolean to render list group items edge-to-edge in a parent container
    flush: PropTypes.bool,
    // boolean to render list group items horizontal. string for specific breakpoint, or true to be always horizontal
    horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
};*/

export default CommentList