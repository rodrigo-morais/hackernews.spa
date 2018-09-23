import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { HN_URL } from '../../constants'

import Tbody from '../shared/Tbody'
import Tr from '../shared/Tr'
import A from '../shared/A'

const Td = styled.td`
	font-family: Verdana, Geneva, sans-serif;
	font-size: 8pt;
	color: #828282;
  padding: 1px;
  vertical-align: top;
`

const AColor = styled(A)`
	color: #828282;
`

const FirstTd = styled(Td)`
  width: 1px;
`

const Vote = styled.div`
	background-size: 10px;
	background-image: url(../../../assets/images/grayarrow2x.gif);
	width: 10px;
	height: 10px;
`

const Commentary = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 9pt;
  color: #000000;
  max-width: 1215px;
  overflow: auto;
  margin-top: 10px;
`

const Reply = styled.div`
  color: #000000;
  font-size: x-small;
`

const AReply = styled.div`
  text-decoration: underline;
`

const Comment = ({ comment, replies }) => {
	const timeDiff = (new Date() - new Date(comment.time * 1000)) / 1000 / 60
	const time = timeDiff > 60 ? Math.floor(timeDiff / 60) : Math.floor(timeDiff)
	const timeMeasure = `${timeDiff > 60 ? 'hour' : 'minutes'}${time === 1 ? '' : 's'}`
  const Table = styled.table`
    padding-top: 10px;
    padding-left: 10px;
  `

  return (
    <Table>
      <Tbody>
        <Tr>
          <FirstTd>
          </FirstTd>
          <Td>
              <center>
                <A href={`${HN_URL}vote?id=18014283&how=up&goto=news`}>
                  <Vote />
                </A>
              </center>
          </Td>
          <Td>
            <AColor href={`${HN_URL}user?id=${comment.by}`}>{comment.by}</AColor>
            {` ${time} ${timeMeasure} ago `}
            [&nbsp;
            <AColor href="#">-</AColor>
            &nbsp;]
            <Commentary dangerouslySetInnerHTML={{ __html: comment.text }} />
            <Reply>
              <AReply href="#">reply</AReply>
            </Reply>
            { replies }
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired,
	replies: PropTypes.array.isRequired,
}

export default Comment
