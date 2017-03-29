import React from 'react';
import Buffer from '../buffer';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import MetaMask from '../metaMask';
import TxSignButton from '../txSignButton';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  color: ${props => props.theme.primary}
`;
const Box = styled('div')`
  padding: 20px;
  max-width: 600px;
  border: 3px solid;
  border-radius: 5px;
`;
const GoodBox = styled(Box)` border-color: ${props => props.theme.primary} `;
const BadBox = styled(Box)` border-color: ${props => props.theme.danger} `;

export default () => (
  <Buffer>
    <div>
      <h2>React Ethereum Starter</h2>
    </div>
    <p>
      This repo is meant to be slightly opinionated,
      containing commonly used react tools such as:
    </p>
    <ul>
      <li><StyledLink to="http://redux.js.org/">redux</StyledLink></li>
      <li>
        <StyledLink to="https://github.com/reacttraining/react-router">
          react router
        </StyledLink>
      </li>
      <li>
        <StyledLink to="https://styled-components.com/">
          styled-components
        </StyledLink>
      </li>
    </ul>
    <p>
      The following link is an implementation of React Router and will take you to a
      {' '}
      <StyledLink to="/redux">redux example</StyledLink>
      .
      Below is an example of a "styled component" that detects an Ethereum account, most likely from Meta Mask:
    </p>
    <MetaMask>
      {accounts => {
        const account = accounts.length ? accounts : null;
        return (
          <div>
            {account &&
              <GoodBox>
                Awesome! Web3 instance of Ethereum is detected on your browser with account:
                {' '}
                {account}
                <RaisedButton> Test </RaisedButton>
                <TxSignButton />
              </GoodBox>}
            {!account &&
              <BadBox>
                Web3 instance of Ethereum not detected, consider downloading
                {' '}
                <StyledLink to="https://metamask.io/">MetaMask</StyledLink>
                {' '}
                and using the
                {' '}
                <StyledLink
                  to="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                >
                  chrome extension
                </StyledLink>
                {' '}
                in order to get the most out of this starter kit.
                <RaisedButton
                  href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                  primary
                >
                  Download Chrome Extension
                </RaisedButton>
              </BadBox>}
          </div>
        );
      }}
    </MetaMask>
    <p>
      Oh yeah, one more thing.  This repo is a personal project.  If you've somehow stumbled upon this and want to reach me, email me at
      {' '}
      <StyledLink to="mailto:johndangerstorey@gmail.com">
        johndangerstorey@gmail.com
      </StyledLink>
    </p>
  </Buffer>
);
