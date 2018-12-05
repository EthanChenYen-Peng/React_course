import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

export default class DishDetail extends Component {
  renderComments(comments) {
    if (comments != null) {
      const commentView = comments.map(comment => {
        return (
          <ul className="list-unstyled text-left">
            <li>{comment.comment}</li> <br />
            <li>
              --{comment.author}, {comment.date}
            </li>
          </ul>
        );
      });
      return commentView;
    }
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
    return (
      <div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>

          <div className="col col-md-5 m-1">
            <h4>Comments</h4>
            {/* <ul className="list-unstyled text-left"> */}
            {this.renderComments(this.props.comments)}
            {/* </ul> */}
          </div>
        </div>
      </div>
    );
  }
}
