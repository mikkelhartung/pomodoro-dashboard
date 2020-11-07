import { gql } from '@apollo/client'

export const POMODORO = gql`
  subscription GetPomodoros {
    pomodoroStarted {
      status
      email
      id
      webhookID
    }
  }
`
