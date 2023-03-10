import { Col } from "react-bootstrap";

export const ProjectCard = ({ name, text, image, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={link}><img className="proj-pic" src={image} /> </a>
        <div className="proj-txtx pt-3">
          <h4>{name}</h4>
          {/* <span>{description}</span> */}
          <span>{text}</span>
        </div>
      </div>
    </Col>
  )
}