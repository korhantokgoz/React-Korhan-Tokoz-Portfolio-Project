import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={url}> <img src={imgUrl} /></a>
        <div className="proj-txtx">
        <a className="text-decoraiton-none text-white" target="_blank" rel="noreferrer" href={url}> <h4>{title}</h4></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}