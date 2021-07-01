import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import {FormButton, InputForm, TextareaForm} from '../components/forms'
import Layout from '../components/Layout'
import {addUserNote, updateUserNote, getUserNote} from '../database'
import {useParams} from 'react-router'

const Editor = ({history}) => {
    const user = useContext(UserContext)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const params = useParams()

    useEffect(() => {
        if(!user.auth.signedIn) {
            history.push('/')
        }else{
            if(params.hasOwnProperty('id')) {
                const original = getUserNote(user.auth.login, params.id)
                setTitle(original.title)
                setText(original.text)
            }
        }
    }, [user, history])

    const signOut = () => {
        user.setter(null)
        history.push('/')
    }

    const saveNote = () => {
        if(params.hasOwnProperty('id')) {
            updateUserNote(user.auth.login, params.id, title, text)
        }else{
            addUserNote(user.auth.login, title, text)
        }
        history.push('/notes')
    }

    return(
        <Layout>
            <FormButton onClick={signOut}>Wyloguj</FormButton>
            <FormButton onClick={() => history.push('/notes')}>Powrót do notatek</FormButton>
            <FormButton onClick={saveNote}>Zapisz</FormButton>
            <br/>
            <InputForm type={'text'} placeholder={'Tytuł'} value={title} onChange={e => setTitle(e.target.value)} />
            <TextareaForm value={text} onChange={e => setText(e.target.value)} placeholder={'Treść'} />
        </Layout>
    )
}

export default Editor
