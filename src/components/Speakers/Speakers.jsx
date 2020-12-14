import React from 'react';
import withData from './withData';

const Speakers = ({ speakers }) => {


  return(
    <div>
      {speakersList.map(({ imageSrc, name }) => {
        return <img src={`/images./${imageSrc}.png`}
        alt={name} key={imageSrc} />
      })}
    </div>
  )

}
export default withData(Speakers);