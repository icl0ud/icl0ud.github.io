import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export const ProjectCard = ({
  title,
  description,
  teamMembers,
  imageUrl,
  award = "",
  award2 = "",
  date,
  linkUrl
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleTitleClick = () => {
    if (linkUrl) {
      window.open(linkUrl, "_blank");
    } else {
      setShowDescription(prev => !prev);
    }
  };

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    paddingTop: award || award2 ? "40px" : "16px",
    position: "relative",
    boxShadow: "0 2px 8px rgba(255, 255, 255, 0.5)",
    maxWidth: "800px",
    margin: "16px auto",
    backgroundColor: "#525174"
  };

  // Container that holds multiple badges
  const badgeContainerStyle = {
    position: "absolute",
    top: "8px",
    right: "8px",
    display: "flex",
    gap: "8px"
  };

  const badgeStyle = {
    backgroundColor: "gold",
    color: "black",
    padding: "4px 8px",
    borderRadius: "0 0 0 5px",
    fontSize: "12px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "4px"
  };

  const imageContainerStyle = {
    flex: "0 0 auto",
    marginRight: "16px",
  };

  const imageStyle = {
    width: "25vw",
    height: "auto",
    borderRadius: "8px",
    objectFit: "cover"
  };

  const infoStyle = { flex: "1" };

  const textStyle = {
    marginBottom: "4px",
    marginTop: "2px"
  };

  const descriptionStyle = {
    marginBottom: "4px",
    marginTop: "2px",
    color: "#CEE5F2"
  };

  const dateStyle = {
    marginBottom: "4px",
    marginTop: "2px",
    color: "#ccc",
    fontSize: "0.9em"
  };

  return (
    <div style={cardStyle} className="project-card">

      {(award || award2) && (
        <div style={badgeContainerStyle}>
          {award && (
            <div style={badgeStyle}>
              <FaStar /> {award}
            </div>
          )}
          {award2 && (
            <div style={badgeStyle}>
              <FaStar /> {award2}
            </div>
          )}
        </div>
      )}

      <div style={imageContainerStyle}>
        <img
          src={imageUrl}
          alt={title}
          style={imageStyle}
          className="project-image"
        />
      </div>

      <div style={infoStyle} className="project-info">
        <h2
          style={{ ...textStyle, cursor: "pointer" }}
          onClick={handleTitleClick}
          title={linkUrl ? "Show me more!" : "Tell me more!"}
        >
          {title}
        </h2>

        {!linkUrl && showDescription && (
          <p style={descriptionStyle}>{description}</p>
        )}

        <p style={textStyle}>{teamMembers.join(", ")}</p>

        {date && <p style={dateStyle}>{date}</p>}
      </div>
    </div>
  );
};
