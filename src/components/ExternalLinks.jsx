import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import React from "react";

const ExternalLinks = ({ githubLink, openLink }) => {
  return (
    <span className="external-links">
      <a className="github-icon" href={githubLink} target="_blank" rel="noopener noreferrer">
        <GitHubIcon
          style={{
            fontSize: 20,
            color: "var(--forest-night)"
          }}
        />
      </a>
      {openLink && (
        <a className="open-icon" href={openLink} target="_blank" rel="noopener noreferrer">
          <OpenInBrowserIcon
            style={{
              fontSize: 24,
              color: "var(--forest-night)"
            }}
          />
        </a>
      )}
    </span>
  );
};

export default ExternalLinks;
