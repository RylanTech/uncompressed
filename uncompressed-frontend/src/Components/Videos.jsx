import { Container, Row } from "react-bootstrap";
import "./Videos.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import trix from '../assets/trix.jpg'
import img from '../assets/img.jpg'

function VideoHomepageSegment() {

  const [videos, setVideos] = useState([
    {
      title: "Ball game",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      size: "800MB",
      thumbnailURL: img
    },
    {
      title: "Ball game",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      size: "800MB",
      thumbnailURL: img
    }
  ])

  return (
    <>
      <Container>
        <Row className="videos-row">
          <div className="videos-title col-6">
            Videos
          </div>
          <div className="see-more-videos-wrapper col-6">
            <Link className="see-more-videos">
              {`See more >`}
            </Link>
          </div>
        </Row>
        <div className="video-segment">
          <Row>
            {videos.map((video) => {
              return (
                <>
                  <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <Link className="video-link">
                      <div className="video">
                        <div className="video-thumbnail">
                          <img src={video.thumbnailURL} className="col-12" />
                        </div>
                        <div className="video-details">
                          <div className="video-title">
                            {video.title}
                          </div>
                          <div className="video-date">
                            Uploaded: {video.date}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              )
            })}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default VideoHomepageSegment;
