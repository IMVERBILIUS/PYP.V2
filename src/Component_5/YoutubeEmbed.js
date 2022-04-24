import React from "react";
import "../content.css";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  
  
  <div className="video-responsive">
    <iframe
      width="350"
      height="280"
      src={`https://www.youtube.com/embed/4i-ZBeA5-kk`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>

);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;