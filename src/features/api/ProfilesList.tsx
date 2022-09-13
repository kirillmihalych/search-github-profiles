import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'
import { useGetProfilesByNameQuery } from './apiSlice'

const ProfilesList = () => {
  const [query, setQuery] = useState<string>('')
  const [skip, setSkip] = useState<boolean>(true)

  const { isLoading, isSuccess, isError } = useGetProfilesByNameQuery(query, {
    skip,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  const handleSubmit = (
    e: React.BaseSyntheticEvent<
      Event,
      EventTarget & HTMLFormElement,
      EventTarget
    >
  ) => {
    e.preventDefault()
    setSkip(false)
    setTimeout(() => {
      setSkip(true)
      setQuery('')
    }, 100)
  }

  return (
    <Wrapper>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          className='search-input'
          value={query}
          onChange={handleChange}
        />
        <button type='submit' className='btn-search'>
          <BsSearch className='icon-search' />
        </button>
      </form>
      <section>Мы профили тут!</section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* search form styles */
  .search-form {
    width: 95vw;
    max-width: 400px;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    background: rgba(149, 157, 165, 0.2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-radius: 5px;
  }
  .search-input {
    padding: 0px 10px;
    background: transparent;
    letter-spacing: 0.05rem;
    flex: 1;
    border: none;
    outline: none;
  }
  .btn-search {
    cursor: pointer;
    height: 35px;
    width: 35px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--red);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .icon-search {
    width: 20px;
    height: 20px;
    color: var(--white);
  }
`

export default ProfilesList
