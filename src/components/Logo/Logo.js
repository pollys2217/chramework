import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import LogoIcon from './assets/logo.svg';
// import Icon from '../Icon/Icon';
import './Logo.styl';

export default class Logo extends Component {

  static propTypes = {
    /** Avaliable values: ['small',''] */
    size: PropTypes.string,
    /** Avaliable values: ['light',''] */
    mod: PropTypes.string,
    /** Avaliable values: ['black',''] */
    type: PropTypes.string,
    /**  */
    url: PropTypes.string,
    /** set this param to true, if you want to add external link */
    external: PropTypes.bool,
  };

  static defaultProps = {
    size: '',
    mod: '',
    type: '',
    url: '/',
  };

  render() {
    const { url, mod, size, type, external, className, ...rest } = this.props;
    const LinkComponent = this.props.external ? 'a' : Link;
    const linkProps = {
      [external ? 'href' : 'to']: url
    };
    if (external) {
      linkProps.target = '_blank';
    }
    return (
      <div
        {...rest}
        className={classNames(['Logo', className, {
          [`Logo--${size}`]: size,
          [`Logo--${type}`]: type,
          [`Logo--${mod}`]: mod,
        } ])}
      >
        <LogoIcon className="Logo__icon" width={120} height={28} />
        {url && <LinkComponent {...linkProps} className="Logo__link" />}
      </div>
    )
  }
}
