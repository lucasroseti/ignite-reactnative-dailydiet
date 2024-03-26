import { TextInput, TextInputProps } from 'react-native'
import { Container } from './styles'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  height?: string
}

export function Input({ inputRef, height = '48', ...rest }: Props) {
  return (
    <Container
      ref={inputRef}
      height={height}
      textAlignVertical="top"
      {...rest} 
    />
  )
}