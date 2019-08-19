import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('__MODAL__');

interface ModalProps {
  children: JSX.Element;
}

export class Modal extends Component<ModalProps, {}> {
  private el: HTMLDivElement;

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return createPortal(
      children,
      this.el,
    );
  }
}
