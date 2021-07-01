import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import UserContext from '../UserContext'
import {FormButton} from '../components/forms'
import Layout from '../components/Layout'
import {getUserNotes, deleteUserNote} from '../database'

const ListContainer = styled.div`
  max-width: 700px;
  margin: 20px auto;
`

const ListItem = styled.div`
  margin: 5px auto;
  padding: 10px;
  text-align: left;
  max-width: 700px;
  background-color: #e8e8e8;
  border-radius: 10px;

  .title {
    margin: 5px;
    font-size: 2rem;
    font-weight: bold;
  }

  .text {
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Notes = ({history}) => {
    const user = useContext(UserContext)
    const [list, setList] = useState([])

    useEffect(() => {
        if(!user.auth.signedIn) {
            history.push('/')
        }else{
            setList(getUserNotes(user.auth.login))
        }
    }, [user, history])

    const signOut = () => {
        user.setter(null)
        history.push('/')
    }

    const deleteItem = idx => {
        deleteUserNote(user.auth.login, idx)
        setList([])
        setTimeout(() => setList(getUserNotes(user.auth.login)), 0)
    }

    return(
        <Layout>
            <FormButton onClick={signOut}>Wyloguj</FormButton>
            <FormButton onClick={() => history.push('/editor')}>Nowa notatka</FormButton>
            <br/>
            {
                list.length === 0
                ?
                    <ListContainer>
                        <i>Brak notatek</i>
                    </ListContainer>
                    :
                    list.map((item, idx) => (
                        <ListItem key={`${item.title}-${idx}`}>
                            <p className={'title'}>{item.title}</p>
                            <p className={'text'}>{item.text}</p>
                            <FormButton onClick={() => history.push('/editor/'+idx)}>Edycja</FormButton>
                            <FormButton onClick={() => deleteItem(idx)}>Usuń</FormButton>
                        </ListItem>
                    ))
            }
        </Layout>
    )
}

export default Notes
