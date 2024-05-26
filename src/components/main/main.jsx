import React from 'react'
import './main.css'
import Card from '../card/card'

function Main() {
  return (
    <div className='container main'>
        <Card colorLabel="turquoise" label="CATEGORY | MARKETING" picture="grey"/>
        <Card colorLabel="turquoise" label="CATEGORY" picture="tree"/>
        <Card colorLabel="blue" label="CATEGORY | DEVELOPMENT" picture="pink"/>
        <Card colorLabel="blue" label="CATEGORY | MARKETING" picture="turquoise"/>
        <Card colorLabel="turquoise" label="CATEGORY | MARKETING" picture="canon"/>
        <Card colorLabel="blue" label="CATEGORY" picture="grey"/>
    </div>
  )
}

export default Main