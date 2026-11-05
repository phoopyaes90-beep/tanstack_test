import { queryOptions } from '@tanstack/react-query'
import axios from 'axios'
import Cookie from 'js-cookie'
import { meSchema } from './schema'

// me

const me = async () => {
  const token = Cookie.get('token')

  const response = await axios.get('http://118.27.148.199:3080/api/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return meSchema.parse(response.data)
}

export const meQueryOptions = queryOptions({
  queryKey: ['me'],
  queryFn: me,
  select: (data) => data.user,
})