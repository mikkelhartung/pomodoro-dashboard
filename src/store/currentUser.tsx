import { makeVar } from '@apollo/client'
import { PomodoroStatus, User } from '../graphql/generated/graphql'

export const currentUser = makeVar<User>({
  id: '',
  name: '',
  email: '',
  webhookID: '',
  status: PomodoroStatus.Pause
})
