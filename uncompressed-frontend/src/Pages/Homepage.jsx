import { Button, Container, Form, Navbar, Row } from 'react-bootstrap'
import './Homepage.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
    const [collections, setCollections] = useState([
        {
            collectionId: 1,
            collectionName: "First Collection",
            createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
            updatedAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
        },
        {
            collectionId: 2,
            collectionName: "Second Collection",
            createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
            updatedAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
        },
        {
            collectionId: 3,
            collectionName: "Third Collection",
            createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
            updatedAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
        },
        {
            collectionId: 4,
            collectionName: "Fourth Collection",
            createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
            updatedAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
        },
        {
            collectionId: 1,
            collectionName: "First Collection",
            createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
            updatedAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
        }
    ])

    const [recentlyUploadedFiles, setRecentlyUploadedFiles] = useState([
        {
            fileId: 1,
            fileName: "file one",
            fileLocation: "x/y/z",
            fileType: ".mp4",
            fileSize: "1GB",
            uploadedAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
            createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
        },
        {
            fileId: 2,
            fileName: "file two",
            fileLocation: "x/y/z",
            fileType: ".mkv",
            fileSize: "12GB",
            uploadedAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
            createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
        },
        {
            fileId: 3,
            fileName: "file three",
            fileLocation: "x/y/z",
            fileType: ".jpg",
            fileSize: "3MB",
            uploadedAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
            createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
        },
        {
            fileId: 4,
            fileName: "file four",
            fileLocation: "x/y/z",
            fileType: ".mp4",
            fileSize: "1GB",
            uploadedAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
            createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbreviated month name
                day: "numeric"
            }),
        }
    ])

    return (
        <>
            <Container>
                <Row>
                    <Navbar>
                        <Link to={`/`}>
                            Home
                        </Link>
                    </Navbar>
                    <div className='col-12 col-lg-3 '>
                        <div className='col-12 collection-search'>
                            <Form.Control className='search-input' placeholder='Search Collections' />
                            {collections.map((collection) => {
                                return (
                                    <div className='collection-list-item col-12'>
                                        <div className='collection-list-item-name'>
                                            {collection.collectionName}
                                        </div>
                                        <div className='collection-list-item-date'>
                                            {collection.updatedAt}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-12 col-lg-9'>
                        <div className='list-section col-12'>
                            <div className='filters'>
                                <Row>
                                    <div className='col-3'>
                                        <div className='filter'>
                                            Images
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='filter'>
                                            Videos
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='filter'>
                                            Recent
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            <div className='recently-uploaded-title'>
                                Recently Uploaded
                            </div>
                            <div className='recently-uploaded'>
                                <Row>
                                    {recentlyUploadedFiles.map((recentFile) => {
                                        return (
                                            <div className='recently-uploaded-file col-12'>
                                                <Row className='file-row'>
                                                    <div className='col-4'>
                                                        <div className='recently-uploaded-file-name'>
                                                            {recentFile.fileName}
                                                        </div>
                                                        <div className='recently-uploaded-file-date'>
                                                            {recentFile.uploadedAt}
                                                        </div>
                                                    </div>
                                                    <div className='col-4 recently-uploaded-file-type'>
                                                        {recentFile.fileType}
                                                    </div>
                                                    <div className='col-4 recently-uploaded-file-size'>
                                                        {recentFile.fileSize}
                                                    </div>
                                                </Row>
                                                <div className='file-bar'/>
                                            </div>
                                        )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Homepage