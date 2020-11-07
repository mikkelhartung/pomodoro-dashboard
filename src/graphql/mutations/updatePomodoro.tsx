import { gql } from '@apollo/client'

export const UPDATE_POMODORO = gql`
  mutation updatePomodoro($email: String!, $status: PomodoroStatus!) {
    updatePomodoro(
      input: { email: $email, status: $status }
    ) {
      name
      status
    }
  }
`
