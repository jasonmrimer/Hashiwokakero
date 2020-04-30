import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { connect } from 'react-redux';

const logo = require('./logo.svg');

export enum Page {
  HASHI_SOLVER,
}

interface Props {
  className?: string;
}

class Header extends React.Component<Props> {
  render() {
    return (
      <div className={classNames('header', this.props.className)}>
        {Header.renderLogo()}
        {Header.renderNavigation()}
      </div>
    );
  }

  private static renderLogo() {
    return (
      <div className={'logo-container'}>
        <span className={'logo'}>
          <img src={logo} alt={'Logo not found'}/>
        </span>
        <span className={'title'}>
          Hashi
        </span>
      </div>
    )
  }

  private static renderNavigation() {
    return (
      <div className={'navigation-container'}>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(styled(Header)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 16px;
  
  img {
    height: 80px;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    .title {
      font-family: 'Kaushan Script', cursive;
      margin-left: 16px;
      font-size: 64px;
      color: ${(props) => props.theme.color.wedgewood};
      font-weight: 600;
    }
  } 
  
  .navigation-container {
    display: flex;
    flex-direction: row;
    
    .selected {
      border-bottom: 2px solid ${(props) => props.theme.color.fontWhite} !important;
    }
    > * {
      margin: 0 24px;
      font-family: Righteous, cursive;
      color: ${(props) => props.theme.color.wedgewood};
      font-size: 24px;
      text-decoration: none;
      border-bottom: 2px solid ${(props) => props.theme.color.wedgewood};
      
      :hover {
        border-bottom: 2px solid ${(props) => props.theme.color.lavender};
      }
    }
  }
`);