import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';


// class Menu extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedDish: null,

//         };

//     }
//     onDishSelect(dish) {
//         this.setState({ selectedDish: dish });
//     }
//     renderDish(dish) {
//         if (dish != null) {
//             return(
//             <Card>
//                 <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
//                 <CardBody>
//                     <CardTitle>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//             )
//         }
//         else {
//             return (
//                 <div></div>
//             )
//         }
//     }



//     render() {
//         const menu = this.props.dishes.map((dish) => {
//             return (
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                     {/* <Media tag="ul">
//                         <Media left middle>
//                             <Media object src={dish.image} alt={dish.name}/>
//                         </Media>

//                         <Media body className="ml-5">
//                             <Media heading>
//                                 {dish.name}
//                             </Media>
//                             <p>{dish.description}</p>
//                         </Media>
//                     </Media> */}
//                     {/* Transforming all this into Card from Bootstrap */}

//                     <Card onClick={() => { this.onDishSelect(dish) }}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>

//                 </div>
//             )
//         });
//         return (
//             <div className="container">
//                 <div className="row">

//                     {menu}

//                 </div>
//                 <div className="row">
//                 {this.renderDish(this.state.selectedDish)}
        
//                 </div>
//             </div>
//         );
//     }

// }

// export default Menu;




// Assignment


function RenderMenuItem({dish, onClick}) {
    return(
        <Card key={dish.id}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );

}
const Menu=(props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });
    return(
        <div className="container">
            <div className="row">
                    {menu}
            </div>
        </div>
    );
}

    



export default Menu;
