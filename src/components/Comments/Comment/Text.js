import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 9pt;
  color: #000000;
  max-width: 1215px;
  overflow: auto;
  margin-top: 10px;
`

const Text = (text) => (
  <Div dangerouslySetInnerHTML={{ __html: text }} />
)

Text.propTypes = {
	text: PropTypes.string.isRequired,
}

export default Text
