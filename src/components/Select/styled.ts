import styled from 'styled-components'
import { colors, theme } from '../../utils'

export const SelectLabelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  outline: none;
  padding: 0.45rem 0.5rem;
  border: 1px solid ${theme.formBorderColor};
  font-family: inherit;
  border-radius: 5px;
  cursor: pointer;
`

export const SelectOverlay = styled.ul`
  padding: 0;
  margin: 0;
  z-index: 999;
  position: absolute;
  width: 100%;
  box-shadow: 0px 4px 11px rgba(157, 157, 157, 0.5);
  border-radius: 5px;

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px 8px;

    &:hover {
      background: ${colors.purple[100]};
      color: ${colors.neutral[400]};
    }
  }
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
