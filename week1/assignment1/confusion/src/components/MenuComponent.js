import React, { Component } from "react";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

import DishDetail from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
    console.log("Menu conponent constructor invoke");
  }
  componentDidMount() {
    console.log("Menu componentdidMount");
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card className="text-left">
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div />;
  }

  render() {
    console.log("Menu render");
    const menu = this.props.dishes.map(dish => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        {/* <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div> */}

        <DishDetail
          dish={this.state.selectedDish}
          comments={
            this.state.selectedDish != null
              ? this.state.selectedDish.comments
              : null
          }
        />
      </div>
    );
  }
}

export default Menu;
