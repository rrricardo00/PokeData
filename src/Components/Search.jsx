import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { SubmitButton, DivInput, Input } from '../Styles/Style'

const Search = () => {

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log('ok')
  }

  return (
    <form onSubmit={handleSubmit}>
      <DivInput display="flex" justifyContent='flex-end' gap="30px">
        <Input placeholder='Search ID or Name' flex='1'/>
        <SubmitButton onClick={handleSubmit}><MagnifyingGlass width={48} weight='bold'/></SubmitButton>
      </DivInput>
    </form>

  )
}

export default Search