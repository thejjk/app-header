import React from 'react'

type imgProps = {
    src?: string
    alt?: string
}



const img: React.FC<imgProps> = ({alt, src, ...props}) => {
    
    
    return (
    <img alt={alt || 'image'} src={src} {...props} />
  );
}

export default img;
