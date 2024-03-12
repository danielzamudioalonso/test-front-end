import { ReactNode } from 'react';
import {
  ButtonsModal,
  ContainerModal,
  ContentChildren,
  ContentModal,
  HeaderModal,
} from './Modal'
import { ButtonFill } from '../../Buttons/button';

type Props = {
  title: string
  children: ReactNode
  onClickClose?: () => void
  ContentModalStyle?: {}
}

const ModalComponent = ({ title, children, onClickClose, ContentModalStyle }: Props) => {
  return (
    <ContainerModal>
      <ContentModal style={ContentModalStyle}>
        <HeaderModal>{title}</HeaderModal>
        <ContentChildren>{children}</ContentChildren>
        <ButtonsModal>
        {
          onClickClose &&
            <ButtonFill onClick={onClickClose}>Close</ButtonFill>
        }
        </ButtonsModal>
      </ContentModal>
    </ContainerModal>
  )
}

export default ModalComponent
