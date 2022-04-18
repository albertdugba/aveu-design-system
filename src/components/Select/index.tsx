import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { SelectContainer, SelectLabelButton, SelectOverlay } from './styled'

interface SelectOption {
  label?: string
  value?: string
}

interface SelectProps {
  onOptionSelect?: (option: SelectOption, optionIndex: number) => void
  options?: SelectOption[]
  label: string
}

export const Select: FunctionComponent<SelectProps> = ({
  options = [],
  label = 'Please select an option',
  onOptionSelect: handler,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [overlayTop, setOverlayTop] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const labelRef = useRef<HTMLButtonElement>(null)

  const handleLabelClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleOptionClick = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex)
      setSelectedIndex(optionIndex)
    }
    setIsOpen(false)
  }

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10)
  }, [])

  return (
    <SelectContainer>
      <SelectLabelButton ref={labelRef} onClick={handleLabelClick}>
        {selectedIndex !== null || 0 ? options[selectedIndex].label : label}
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          &#94;
        </span>
      </SelectLabelButton>
      <SelectOverlay style={{ top: overlayTop }}>
        {isOpen
          ? options.map((option, index) => {
              return (
                <li
                  onClick={() => handleOptionClick(option, index)}
                  key={option.value}
                >
                  {option.label}
                </li>
              )
            })
          : null}
      </SelectOverlay>
    </SelectContainer>
  )
}
