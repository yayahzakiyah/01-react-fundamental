import React from 'react'

const Spinner = () => {
  return (
    <div>
        <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'></div>
            <strong>{props.message}</strong>
        </div>
    </div>
  )
}

Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;
