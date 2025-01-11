import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Collections.css";
import {Link} from 'react-router-dom'

function CollectionHomepageSegment() {

  const [collections, setCollections] = useState([
    {
      title: "Christmas Eve",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      size: "4.5GB",
      collectionId: 1
    },
    {
      title: "New Years",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      size: "4.5GB",
      collectionId: 2
    },
    {
      title: "Concert",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      size: "4.5GB",
      collectionId: 3
    }
  ])

  return (
    <>
      <Container>
        <Row className="collections-row">
          <div className="collections-title col-6">
            Collections 
          </div>
          <div className="see-more-collections-wrapper col-6">
            <Link className="see-more-collections">
            {`See more >`}
            </Link>
          </div>
        </Row>
        <div className="collections-segment">
          <Row>
            {collections.map((collection) => {
              return (
                <>
                  <div className="col-12 col-lg-4">
                    <Link className="collection-link" to={`/collection/${collection.collectionId}`}>
                    <div className="collection">
                      <div className="collection-title">
                        {collection.title}
                      </div>
                      <div className="collection-date">
                        {collection.date}
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
  );

}

export default CollectionHomepageSegment;
