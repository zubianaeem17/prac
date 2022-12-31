import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

// class Main extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES,
//       selectedDish: null
//     };
//   }
//   onDishSelect(dishId) {
//     this.setState ({ selectedDish: dishId });
//   }

//     render() {
//     return (

//       <div>
//         <Header />
//         <Menu dishes={this.state.dishes} 
//         onClick={(dishId) => this.onDishSelect(dishId)} />
//         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
//         <Footer />
//       </div>
//     );
//   }
// };

//after routing we change the code to this

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }
 

    render() {
      const HomePage= () => {
        return (
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
        )
      }
    return (

      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
};


  

    

export default Main;