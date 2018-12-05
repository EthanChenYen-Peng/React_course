import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function getDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(new Date(Date.parse(date)));
}

function renderComments(comments) {
  if (comments != null) {
    const commentView = comments.map(comment => {
      return (
        <ul className="list-unstyled text-left">
          <li>{comment.comment}</li> <br />
          <li>
            --{comment.author}, {getDate(comment.date)}
          </li>
        </ul>
      );
    });
    return commentView;
  } else {
    return <div />;
  }
}
function renderDish(dish) {
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

const DishDetail = ({ dish }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>

        <div className="col col-md-5 m-1">
          <h4>Comments</h4>
          {/* <ul className="list-unstyled text-left"> */}
          {dish == null ? renderComments(null) : renderComments(dish.comments)}
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
