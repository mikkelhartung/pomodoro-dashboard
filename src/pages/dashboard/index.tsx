import React, { FC } from 'react'
import Layout from '../../components/Layout'
import {
  PomodoroStatus,
  useGetPomodorosSubscription,
  useUpdatePomodoroMutation,
} from '../../graphql/generated/graphql'

const Dashboard: FC = () => {
  const { data } = useGetPomodorosSubscription()
  const [startPomodoro] = useUpdatePomodoroMutation({
    variables: {
      email: 'itsmikkelhartung@gmail.com',
      status: PomodoroStatus.Started,
    },
  })
  const [stopPomodoro] = useUpdatePomodoroMutation({
    variables: {
      email: 'itsmikkelhartung@gmail.com',
      status: PomodoroStatus.Stopped,
    },
  })
  const [pausePomodoro] = useUpdatePomodoroMutation({
    variables: {
      email: 'itsmikkelhartung@gmail.com',
      status: PomodoroStatus.Pause,
    },
  })

  return (
    <Layout>
      Dashboard
      <button onClick={() => startPomodoro()}>Start</button>
      <button onClick={() => stopPomodoro()}>Stop</button>
      <button onClick={() => pausePomodoro()}>Pause</button>
      <h3>Users:</h3>
      {data?.pomodoroStarted?.email}
      {data?.pomodoroStarted?.status}
    </Layout>
  )
}

export default Dashboard
