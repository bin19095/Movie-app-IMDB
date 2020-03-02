import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faHome,faEdit } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';

// or less ideally

const Text1 = props  => {
	return(
		<p>
		<FontAwesomeIcon icon={['fal', 'code'] }/>
		<FontAwesomeIcon icon={faCoffee} size="4x"/>
		<a    href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer">
		<FontAwesomeIcon icon={faHome} style={{ color: "brown" }} size="4x"/>
		</a>
		<h1>Hello Life is Beautiful...</h1>
		<FontAwesomeIcon icon={faEdit} size="3x" color="blue"/>
		<Button> ClickMe</Button>
		</p>
		)
};

export default Text1;