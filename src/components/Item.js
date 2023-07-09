import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card} from "react-bootstrap"


function Item({i, handleDelete}){
    function handleClick(){
        handleDelete(i.id)
    }

    return (
        <Card  style={{ width:"15rem", display:"inline-block", backgroundColor:"#cccccc", margin: "10px"}}>
            <Card.Body>
                <Card.Title>{i.name}</Card.Title>
                <Card.Img variant="top" src={i.image} alt={i.name} style={{height: "15vw", width:"100%", objectFit:"contain", backgroundColor:"white" }}/>
                <Card.Text>Size:{i.size}</Card.Text>
                <Card.Text >${i.price}</Card.Text>
                <Button style={{backgroundColor: "red"}} onClick={handleClick}>Delete</Button> 
            </Card.Body>
                       
        </Card>
    )
}

export default Item