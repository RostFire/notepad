import React, { useEffect } from 'react'
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom'
import LoginPage from './views/LoginPage'
import Notes from './views/Notes'
import Editor from './views/Editor'
import { loadDatabase } from './database'
import { UserProvider } from './UserContext'

function App() {

  useEffect(() => {
      loadDatabase()
  }, [])

  return (
      <UserProvider>
          <HashRouter>
              <React.Suspense fallback={() => <span>Loading...</span>}>
                  <Switch>
                      <Route exact path="/" name="Login Page" render={props => <LoginPage {...props} />} />
                      <Route exact path="/notes" name="Notatki" render={props => <Notes {...props} />} />
                      <Route exact path="/editor" name="Edytor" render={props => <Editor {...props} />} />
                      <Route exact path="/editor/:id" name="Edytor" render={props => <Editor {...props} />} />
                  </Switch>
              </React.Suspense>
          </HashRouter>
      </UserProvider>
  );
}

export default App;
