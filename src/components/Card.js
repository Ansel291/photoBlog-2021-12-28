import React from 'react';
import { StyledCard } from "./styles/Card.styled"

export default function Card({item: {id, date, title, body, image} }) {
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{title}</h2>
                <p className="date">Date: {date}</p>
                <p>{body}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt="" />
            </div>
        </StyledCard>
    )
}
