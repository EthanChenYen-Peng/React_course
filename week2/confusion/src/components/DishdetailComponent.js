import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb
} from "reactstrap";

import { Link } from "react-router-dom";

function getDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(new Date(Date.parse(date)));
}

function RenderComments({ comments }) {
  console.log("comment");
  console.log(comments);
  if (comments != null) {
    const commentView = comments.map(comment => {
      return (
        <ul className="list-unstyled text-left" key={comment.id}>
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
function RenderDish(dish) {
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

const DishDetail = props => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
