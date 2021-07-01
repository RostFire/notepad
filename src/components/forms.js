import styled from 'styled-components'

export const InputForm = styled.input`
  margin: 8px auto;
  padding: 5px 10px;
  border-radius: 15px;
  border: 2px #424242 solid;
  display: block;
  min-width: 300px;
  background-color: #b883e3;
  color: #fff;
  
  &::placeholder {
    color: #fff;
  }

  &:hover {
    background-color: #c6a0e8;
  }
`

export const TextareaForm = styled.textarea`
  margin: 8px auto;
  padding: 5px 10px;
  border-radius: 15px;
  border: 2px #424242 solid;
  display: block;
  min-width: 300px;
  min-height: 300px;
  background-color: #b883e3;
  color: #fff;
  
  &::placeholder {
    color: #fff;
  }

  &:hover {
    background-color: #c6a0e8;
  }
`

export const FormButton = styled.button`
  margin: 5px;
  padding: 5px 10px;
  min-width: 80px;
  border-radius: 8px;
  border: 2px #424242 solid;
  background-color: #5f1599;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #c6a0e8;
  }
`
