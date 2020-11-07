import React, { FC } from 'react'
import Layout from '../../components/Layout'
import { PomodoroStatus, useGetPomodorosSubscription, useUpdatePomodoroMutation } from '../../graphql/generated/graphql'

const Dashboard: FC = () => {

  // const { data } = useGetUsersQuery()
  const { data } = useGetPomodorosSubscription()
  const [updatePomodoro] = useUpdatePomodoroMutation({
    variables: {
      email: 'itsmikkelhartung@gmail.com',
      status: PomodoroStatus.Started
    }
  })

  console.log(data)
  return (
    <Layout>
      Dashboard

      <button onClick={() => updatePomodoro()}>Update</button>

      <h3>Users:</h3>
      {data?.pomodoroStarted?.email}
      {data?.pomodoroStarted?.status}
    </Layout>
  )
}

export default Dashboard
