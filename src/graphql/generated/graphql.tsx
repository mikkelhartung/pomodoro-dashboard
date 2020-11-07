import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  users: Array<Maybe<User>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  updatePomodoro?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationUpdatePomodoroArgs = {
  input: UserInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  pomodoroStarted?: Maybe<User>;
};

export type UserInput = {
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  status: PomodoroStatus;
  webhookID?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  status: PomodoroStatus;
  webhookID: Scalars['String'];
};

export enum PomodoroStatus {
  Started = 'STARTED',
  Pause = 'PAUSE',
  Stopped = 'STOPPED'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type UpdatePomodoroMutationVariables = Exact<{
  email: Scalars['String'];
  status: PomodoroStatus;
}>;


export type UpdatePomodoroMutation = (
  { __typename?: 'Mutation' }
  & { updatePomodoro?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'status'>
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
  )>> }
);

export type GetPomodorosSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetPomodorosSubscription = (
  { __typename?: 'Subscription' }
  & { pomodoroStarted?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'status' | 'email' | 'id' | 'webhookID'>
  )> }
);


export const UpdatePomodoroDocument = gql`
    mutation updatePomodoro($email: String!, $status: PomodoroStatus!) {
  updatePomodoro(input: {email: $email, status: $status}) {
    name
    status
  }
}
    `;
export type UpdatePomodoroMutationFn = Apollo.MutationFunction<UpdatePomodoroMutation, UpdatePomodoroMutationVariables>;

/**
 * __useUpdatePomodoroMutation__
 *
 * To run a mutation, you first call `useUpdatePomodoroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePomodoroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePomodoroMutation, { data, loading, error }] = useUpdatePomodoroMutation({
 *   variables: {
 *      email: // value for 'email'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdatePomodoroMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePomodoroMutation, UpdatePomodoroMutationVariables>) {
        return Apollo.useMutation<UpdatePomodoroMutation, UpdatePomodoroMutationVariables>(UpdatePomodoroDocument, baseOptions);
      }
export type UpdatePomodoroMutationHookResult = ReturnType<typeof useUpdatePomodoroMutation>;
export type UpdatePomodoroMutationResult = Apollo.MutationResult<UpdatePomodoroMutation>;
export type UpdatePomodoroMutationOptions = Apollo.BaseMutationOptions<UpdatePomodoroMutation, UpdatePomodoroMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    name
    email
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetPomodorosDocument = gql`
    subscription GetPomodoros {
  pomodoroStarted {
    status
    email
    id
    webhookID
  }
}
    `;

/**
 * __useGetPomodorosSubscription__
 *
 * To run a query within a React component, call `useGetPomodorosSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetPomodorosSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPomodorosSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetPomodorosSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetPomodorosSubscription, GetPomodorosSubscriptionVariables>) {
        return Apollo.useSubscription<GetPomodorosSubscription, GetPomodorosSubscriptionVariables>(GetPomodorosDocument, baseOptions);
      }
export type GetPomodorosSubscriptionHookResult = ReturnType<typeof useGetPomodorosSubscription>;
export type GetPomodorosSubscriptionResult = Apollo.SubscriptionResult<GetPomodorosSubscription>;