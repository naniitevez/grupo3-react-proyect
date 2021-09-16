import React from 'react'

const ImageCard = ({url, description}) => {
    return (
        <div className="card-border">
                <img className="card-image" src={url} alt={description} />
        </div>
    )
}

export default ImageCard
