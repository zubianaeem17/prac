import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


function RenderDish({dish}) {
    if (dish != null){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return(
            <div></div>
        );
        
    }

    
}
const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
            </div>
        </div>
    )
}


export default DishDetail;