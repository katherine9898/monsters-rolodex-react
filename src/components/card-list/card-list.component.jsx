import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
    // put card-list here for style
   <div className= 'card-list'>
       {props.monsters.map(monster => (
       <Card key={monster.id} monster={monster}/>))}
    </div>
);