import React from 'react'
import styled from 'styled-components'

import { HN_URL } from '../../constants'

import A from './A'

const Div = styled.div`
	background-size: 10px;
	background-image: url(../../../assets/images/grayarrow2x.gif);
	width: 10px;
	height: 10px;
`

export default () => (
  <center>
    <A href={`${HN_URL}vote?id=18014283&how=up&goto=news`}>
      <Div />
    </A>
  </center>
)
