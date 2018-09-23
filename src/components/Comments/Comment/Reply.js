import React from 'react'
import styled from 'styled-components'

import A from '../../shared/A'

const Div = styled.div`
  color: #000000;
  font-size: x-small;
`

const AReply = styled(A)`
  text-decoration: underline;
`

export default () => (
  <Div>
    <AReply href="#">reply</AReply>
  </Div>
)
