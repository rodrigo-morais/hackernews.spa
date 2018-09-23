import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { HN_URL } from '../../../constants'

import getTime from '../../../lib/time'

import Text from './Text'
import Reply from './Reply'

import Tbody from '../../shared/Tbody'
import Tr from '../../shared/Tr'
import TdShared from '../../shared/Td'
import AColor from '../../shared/AColor'
import Vote from '../../shared/Vote'

const Table = styled.table`
  padding-top: 10px;
  padding-left: 10px;
`

const Td = styled(TdShared)`
  padding: 1px;
  font-size: 8pt;
`

const TdFirst = styled(TdShared)`
  width: 1px;
`

const Comment = ({ comment, replies, visible, toggleVisibility }) => {
	const { time, timeMeasure } = getTime(comment.time)

  return (
    <Table>
      <Tbody>
        <Tr>
          <TdFirst>
          </TdFirst>
          <Td>
            <Vote />
          </Td>
          <Td>
            <AColor href={`${HN_URL}user?id=${comment.by}`}>{comment.by}</AColor>
            {` ${time} ${timeMeasure} ago `}
            [&nbsp;
            <AColor onClick={toggleVisibility}>
              { visible ? '-' : `+ ${replies.length + 1}` }
            </AColor>
            &nbsp;]
            { visible && <Text key={comment.id} text={comment.text} /> }
            { visible && <Reply />}
            { visible && replies }
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired,
	replies: PropTypes.array.isRequired,
	visible: PropTypes.bool.isRequired,
	toggleVisibility: PropTypes.func.isRequired,
}

export default Comment
