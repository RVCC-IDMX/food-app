import { Nav } from './nav';
import { Git } from './git';
import React from 'react';
import ReactDOM from 'react-dom';
import MagicGrid from "magic-grid"
//import {v4 as uuidv4} from 'uuid';
import Favorites from './SavedDetails';

// Import navigation + Git data
Nav();
Git();

// Create dynamic grid of cards
let magicGrid = new MagicGrid({
  container: "#favoriteCards",
  items: 10,
  gutter: 45,
});
magicGrid.listen();

ReactDOM.render(
  <React.StrictMode>
      <Favorites />
  </React.StrictMode>,
  document.getElementById('favoriteCards')
);