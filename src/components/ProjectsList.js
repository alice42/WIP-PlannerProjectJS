import * as React from 'react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import { Checkbox } from '@material-ui/core'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'

const ProjectsList = props => {
  const firestore = useFirestore()
  const history = useHistory()
  const firebase = useFirebase()

  const { uid } = useSelector(state => state.firebase.auth)

  const [projects, setProjects] = React.useState(props.firestore.data.projects)

  React.useEffect(() => {
    setProjects(props.firestore.data.projects)
  }, [props.firestore.data.projects])

  const handleCreateNewProject = () => {
    const id = uuid()
    const newProject = {
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      id: `project_${id}`,
      isCompleted: false,
      title: 'New Project',
      startDate: null,
      deadline: null,
      tags: [],
      lists: [
        {
          title: '',
          id: `list-${0}`,
          cards: []
        }
      ]
    }
    return firestore
      .collection('users')
      .doc(uid)
      .collection('projects')
      .add(newProject)
      .then(docRef => {
        docRef.update({
          projectID: docRef.id
        })
      })
      .then(() => {
        history.push(`/projects/${newProject.id}`)
      })
  }

  const handleLongTitle = text =>
    text && text.length > 11 ? `${text.slice(0, 10)}...` : text

  return (
    <>
      <div>
        <ul style={{ margin: '0', padding: '0' }}>
          {projects &&
            Object.values(projects).map(
              project =>
                project &&
                project.id && (
                  <li key={project.id}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/projects/${project.id}`}
                    >
                      <Checkbox checked={project.isCompleted} />
                      {handleLongTitle(project.title)}
                    </Link>
                  </li>
                )
            )}
        </ul>
      </div>
      <button onClick={handleCreateNewProject}>Add</button>
    </>
  )
}

export default ProjectsList
