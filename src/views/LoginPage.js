import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { InputForm, FormButton } from '../components/forms'
import { clearDatabase, signIn, signUp } from '../database'
import UserContext from '../UserContext'

const LoginPage = ({history}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const user = useContext(UserContext)

    const invalidData = () => login.trim() === '' || password.trim() === ''

    const signInButton = () => {
        if(signIn(login, password) === 'GRANTED') {
            user.setter(login)
            history.push('/notes')
        }else{
            alert('PODANO ZŁE DANE!')
        }
    }

    const signUpButton = () => {
        if(signUp(login, password) === 'OK') {
            user.setter(login)
            history.push('/notes')
        }else{
            alert('PODANY LOGIN JEST ZAJĘTY!')
        }
    }

    return(
        <Layout>
            <InputForm type={'text'} maxLength={'15'} placeholder={'Login'} value={login} onChange={e => setLogin(e.target.value)} />
            <InputForm type={'password'} maxLength={'15'} placeholder={'Password'} value={password} onChange={e => setPassword(e.target.value)} />
            <FormButton type={'submit'} disabled={invalidData()} onClick={signInButton}>Zaloguj</FormButton>
            <FormButton disabled={invalidData()} onClick={signUpButton}>Utwórz konto</FormButton>
            <FormButton onClick={clearDatabase}>Wyczyść bazę danych</FormButton>
        </Layout>
    )
}

export default LoginPage
