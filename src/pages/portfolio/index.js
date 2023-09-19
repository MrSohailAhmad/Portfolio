import React from "react";
import "./style.css";

import { Container, Row, Col } from "react-bootstrap";
import { meta, project } from "../../content_option";

export const Portfolio = () => {
  return (
    <Container className="About-header">
      <meta charSet="utf-8" />
      <title> Portfolio | {meta.title} </title>{" "}
      <meta name="description" content={meta.description} />
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lang="5">
          <h3 className="color_sec py-4">MY PROJECTS</h3>
        </Col>
        <Col lg="7">
          {project.map((data, i) => {
            return (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
