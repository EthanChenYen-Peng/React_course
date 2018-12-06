import React from "react";
import { Media } from "reactstrap";
export default function RenderLeader({ leaders }) {
  console.log(leaders);
  const views = leaders.map(detail => {
    return (
      // <Media>
      //   <p key={detail.id}>{detail.description}</p>;
      // </Media>
      <div className="container mb-5">
        <Media key={detail.id}>
          <Media left className="mr-3">
            <Media object src={detail.image} alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>{detail.name}</Media>
            <Media>{detail.abbr}</Media>
            <Media>{detail.description}</Media>
          </Media>
        </Media>
      </div>
    );
  });
  return <div>{views}</div>;
}
