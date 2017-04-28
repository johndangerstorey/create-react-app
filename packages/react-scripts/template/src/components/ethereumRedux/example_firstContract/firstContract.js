import React from 'react'
import { Row, Col } from '../../flex'
import styled from 'styled-components'

const CodeBlock = styled('pre')`
  border-left: 5px solid ${({ theme }) => theme.primary};
`

const FirstContract = ({
  simpleStore,
  accounts,
  simpleStoreBytecode,
  abi,
  textareaRows,
}) => (
  <Col>
    <h4>SimpleStore Contract</h4>
    <Row flex="1" gutter="20px">
      <Col flex="1">
        <label>Set Value</label>
        <input id="valueAmount" type="number" placeholder="i.e. 4500" />

        <button id="setValue">Set Value</button>
        <button id="getValue">Get Value</button>

        <br /><br />

        <div
          id="response"
          style={{
            padding: 20,
            border: '1px solid #9b4dca',
            wordWrap: 'break-word',
          }}
        >
          Deploying your contract...
        </div>
      </Col>
      <Col flex="1">
        <label>Bytecode</label>
        <input value={simpleStoreBytecode} readOnly />

        <label>ABI</label>
        <textarea id="abi" value={abi} rows={textareaRows} readOnly />
      </Col>
    </Row>

    <br /><br />

    <label>Solidity Code</label>

    <CodeBlock
      dangerouslySetInnerHTML={{
        __html: `
      contract SimpleStore {
        function set(uint _value) {
          value = _value;
        }

        function get() constant returns (uint) {
          return value;
        }

        uint value;
      }
      `,
      }}
    />
  </Col>
)
export default FirstContract
