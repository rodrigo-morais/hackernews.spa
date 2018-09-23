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

const Comment = ({ comment, replies }) => {
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
            <AColor href="#">-</AColor>
            &nbsp;]
            <Text text={comment.text} />
            <Reply />
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
