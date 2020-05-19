import React, {Component} from 'react';
import CommentList from "./CommentList";
import {Badge,Button, Input} from 'reactstrap';
class  Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentComment: {
                comment: ' ',
                key: ''
            }
        }
    }

    handleInput(e){
    this.setState({
        currentComment:{
            comment:e.target.value,
            key:(Math.random()*1000)
        }
    })
    }
        addItem(e){
            e.preventDefault();
            const newItem=this.state.currentComment;
            if(newItem.comment!==" "){
                const newItems=[...this.state.items,newItem];
                this.setState({
                    items:newItems,
                    currentComment:{
                        comment:' ',
                        key:''
                    }
                })
            }


        }
        deleteItem(key){
        const filteredItems = this.state.items.filter(item =>item.key !==key);
        this.setState({
            items:filteredItems
        });
        }
        setUpdate(comment,key){

        const items=this.state.items;
        items.map(item =>{
            if(item.key===key){
                item.comment=comment;
            }
        });
        this.setState({
            items:items
        });
        }

    render() {
        const style1={
            justifyContent:'center',
            marginTop:'10px',


        };
        const style2={
            marginBottom:'10px',


        };
        const btnstyle={

            marginTop: '10px',
            marginBottom: '20px'


        };

        return (
            <div style={style1}>
                <form onSubmit={(e)=>this.addItem(e)}>
                     <Badge style={style2}>
                         Comment
                     </Badge>
                    <Input type="textarea"
                           value={this.state.currentComment.comment}
                           onChange={(e)=>this.handleInput(e)}
                            placeholder="Add Comment"
                    />
                    <Button style={btnstyle} type="submit"> Submit </Button>
                </form>

    <CommentList items={this.state.items}
                 deleteItem={e=>this.deleteItem(e)}
                 setUpdate={(e,key)=>this.setUpdate(e,key)}
    />
            </div>
        );
    }
}


export default Comments