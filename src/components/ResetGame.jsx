import React from 'react'

export const ResetGame = ({ scores, resetBoard }) => {

	function refreshPage() {
    window.location.reload(false);
  }
	
  const handleReset = () => {
    localStorage.removeItem('scores')
		scores = {
			xScore: 0,
			oScore: 0,
		}
		refreshPage()
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
        flexDirection: 'column',
      }}
    >
      <button
        style={{
          borderRadius: '10px',
          border: 'none',
          boxShadow: '0px 0px 8px #888',
          padding: '1.5rem',
          backgroundColor: 'white',
          fontSize: '1.2rem',
          color: 'orange',
          fontWeight: 'bold',
          width: '12%',
          margin: '0 auto',
        }}
        onClick={resetBoard}
      >
        New Game
      </button>
      <button style={{ width: '12%', margin: '0 auto' }} onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
