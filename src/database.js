const LOCAL_STORAGE_KEY = 'simplenotepad'

let db = []

export const loadDatabase = () => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    db = data ? JSON.parse(data) : []
    console.log('LOADED', db)
}

export const saveDatabase = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(db))
    console.log('SAVED', db)
}

export const clearDatabase = () => {
    db = []
    saveDatabase()
    alert('BAZA DANYCH ZRESETOWANA!')
}

export const userExists = (login) => {
    const user = db.find(i => i.login === login)
    return user ? user : false
}

export const signIn = (login, password) => {
    const user = db.find(i => i.login === login && i.password === password)
    return user ? 'GRANTED' : 'DENIED'
}

export const signUp = (login, password) => {
    if(userExists(login)) return 'TAKEN'
    db.push({ login, password, notes: [] })
    saveDatabase()
    return 'OK'
}

export const getUserNotes = (login) => {
    const user = userExists(login)
    if(user) return user.notes
    return []
}

export const getUserNote = (login, idx) => {
    const user = userExists(login)
    if(!user) return 'NOTFOUND'
    return user.notes[idx]
}

export const deleteUserNote = (login, idx) => {
    const user = userExists(login)
    if(!user) return 'NOTFOUND'
    user.notes.splice(idx, 1)
    saveDatabase()
}

export const addUserNote = (login, title, text) => {
    const user = userExists(login)
    if(!user) return 'NOTFOUND'
    user.notes.push({ title, text })
    saveDatabase()
}

export const updateUserNote = (login, idx, title, text) => {
    const user = userExists(login)
    if(!user) return 'NOTFOUND'
    user.notes[idx] = { title, text }
    saveDatabase()
}
