import React from 'react'
import './Input.scss'
interface Props {
  type: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  ref?: React.Ref<HTMLInputElement> | null
}
const Input: React.FC<Props> = ({type, value, onChange, placeholder, ref}) => {


  return (
    <>
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} ref={ref} />
    </>
  )
}

export default Input