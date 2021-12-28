import React from 'react'
import { Container } from '../components/styles/Container.styled'
import { LocationHeadline } from './styles/Locations.styled'
import content from '../content'
import Card from '../components/Card'

const Locations = () => {
    return (

        <div id="locations">

            <Container>
                
                <LocationHeadline>locations: </LocationHeadline>
                {content.map((item, index) => (
                    <Card key={index} item={item}/>
                ))}

            </Container>  

        </div>
        
    )
}

export default Locations
