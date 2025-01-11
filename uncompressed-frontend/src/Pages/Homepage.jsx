import { Button, Container, Form, Row } from 'react-bootstrap'
import './Homepage.css'
import { useState } from 'react'
import VideoHomepageSegment from '../Components/Videos'
import CollectionHomepageSegment from '../Components/Collections'
import PhotoHomepageSegment from '../Components/Photos'

function Homepage() {
    const [query, setQuery] = useState()

    return (
        <>
            <Container>
                <Row>
                    <div className='header'>
                        <Row>
                            <div className='col-10'>
                                <Form.Control 
                                    className='search-input' 
                                    placeholder='Search'
                                    onInput={(e) => {
                                        setQuery(e.target.value)
                                    }}
                                    />
                            </div>
                            <div className='col-2'>
                                <Button className='profile-button'>
                                    P
                                </Button>
                            </div>
                        </Row>
                    </div>
                    <CollectionHomepageSegment/>
                    <VideoHomepageSegment/>
                    <PhotoHomepageSegment/>
                </Row>
            </Container>
        </>
    )
}
export default Homepage