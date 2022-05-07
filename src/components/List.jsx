import React from 'react'
import ListItem from './ListItem'

export default function List({ goods }) {
    return (<div className='main'>{
        goods.map((good) => {
            return <ListItem key={good.mainId} good={good} />
        })}
    </div>
    )
}
