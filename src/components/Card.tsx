import React, { FC, useState } from "react";

export enum CardVariant{
     outlined = 'outlined',
     primary = 'primmary'
}

interface CardProps {
    width: string,
    height: string,
    margin: string,
    children?: React.ReactNode,
    variant: CardVariant,
    onClick: (num: number) => void,

}

export const Card: FC<CardProps> = ({width, height, margin, variant, children, onClick}) => {
    const [state, setState] = useState<number>(0)
    return(

        <>
            <div style={{width, height, margin,
                border: variant ===CardVariant.outlined? '10px solid grey' : 'none' ,
                background: variant === CardVariant.primary ? 'lightgrey' : ''}}
                onClick={() => onClick (state)}>
                {children}
            </div>
        </>
    )
}

// export default Card