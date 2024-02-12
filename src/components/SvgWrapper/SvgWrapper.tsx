import React from 'react'

type SvgWrapperProps = {
    src: string
}

export const SvgWrapper: React.FC<SvgWrapperProps> = ({
    src: srcSvg,
}) => <img src={srcSvg} />

export default SvgWrapper
