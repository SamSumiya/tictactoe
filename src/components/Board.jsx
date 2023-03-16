import './Board.css'
import React from 'react'
import { Box } from './Box.jsx'

export const Board = ({ board,onClick }) => {


	return (
		<div className='board'>
			{
				board.map((mark, idx) => (
					<Box value={mark} key={idx} onClick={() => mark === null && onClick(idx)} />
				))
			}
		</div>
	)
}
