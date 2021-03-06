import './ProgressBar.css'
import { useState } from 'react'
import React from 'react'

export const ProgressBar = ({done}) => {

    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);


    return (
		<div className="progress">
			<div className="progress-done" style={style}>
			</div>
		</div>
    )
}
