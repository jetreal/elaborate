import React from 'react'
import styles from './displayParams.module.sass'

const DisplayParams: React.FC = (props) => {
  return (
    <>
      <div className="displayParams">
        <p id="width"> </p>
        <p id="height"> </p>
        <p id="scroll"> </p>
        <p id="mouseX"> </p>
        <p id="mouseY"> </p>
        <p id="clientX"> </p>
        <p id="clientY"> </p>
      </div>
    </>
  )
}

export default DisplayParams