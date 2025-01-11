import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Photos.css";
import { Link } from "react-router-dom";
import img from '../assets/img.jpg'
import pimg from '../assets/trix.jpg'

function PhotoHomepageSegment() {
  const [photos, setPhotos] = useState([
    {
      title: "Nature Landscape",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      photoURL: pimg, // Example photo
      photoId: 1,
    },
    {
      title: "Cityscape at Dusk",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      photoURL: img, // Example photo
      photoId: 2,
    },
    {
      title: "Mountain Peaks",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      photoURL: pimg, // Example photo
      photoId: 3,
    },
    {
      title: "Beach Sunset",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      photoURL: img, // Example photo
      photoId: 4,
    },
  ]);

  return (
    <Container>
      <Row className="videos-row">
        <div className="photos-title col-6">
          Photos
        </div>
        <div className="see-more-photos-wrapper col-6">
          <Link className="see-more-videos">
            {`See more >`}
          </Link>
        </div>
      </Row>
      <div className="photos-segment">
        <Row>
          {photos.map((photo) => {
            return (
              <Link className="photo col-6 col-md-4 col-lg-3 col-xl-2" key={photo.id}>
                <img
                  className="col-12 image"
                  src={photo.photoURL}
                  alt="User Uploaded"
                />
              </Link>
            );
          })}



        </Row>
      </div>
    </Container>
  );
}

export default PhotoHomepageSegment;
