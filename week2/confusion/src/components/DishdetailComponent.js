import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default class DishDetail extends Component {
  getDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(new Date(Date.parse(date)));
  }

  renderComments(comments) {
    if (comments != null) {
      const commentView = comments.map(comment => {
        return (
          <ul className="list-unstyled text-left">
            <li>{comment.comment}</li> <br />
            <li>
              --{comment.author}, {this.getDate(comment.date)}
            </li>
          </ul>
        );
      });
      return commentView;
    } else {
      return <div />;
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>

          <div className="col col-md-5 m-1">
            <h4>Comments</h4>
            {/* <ul className="list-unstyled text-left"> */}
            {this.props.dish == null
              ? this.renderComments(null)
              : this.renderComments(this.props.dish.comments)}
            {/* </ul> */}
          </div>
        </div>
      </div>
    );
  }
}
