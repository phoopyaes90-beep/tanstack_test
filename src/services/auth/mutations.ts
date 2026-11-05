// import axios from "axios"
// import type { ILoginPayload, IRegisterPayload } from "./type"
// import { toast } from "@/components/ui/toast"
// import { useMutation } from "@tanstack/react-query"


// const register = async (payload: IRegisterPayload) => {
//     const response = await axios.post('http://localhost:3000/api/auth/register',
//          payload,)
//     return response.data
// }

// export const useRegisterMutation = () => {
//     return useMutation({
//         mutationFn: (payload: IRegisterPayload) => register(payload),
//         onSuccess: (data) => {
//             console.log(data)
//             return data
//         },
//         onError: (data: { error: string }) => {
//             toast.add({
//                 type: 'error',
//                 title: data.error,
//                 description: 'Sunday, December 3 at 9:00 AM', 
//             })
//             return data
//         },

//     })
// }

// const login = async (payload: ILoginPayload) => {
//     const response = await axios.post(
//          'http://localhost:3000/api/auth/login',
//           payload,)
//     return response.data
// }

// export const useLoginMutation = () => {
//     return useMutation({
//         mutationFn: (payload: ILoginPayload) => login(payload),
//         onSuccess: (data) => {
//             console.log(data)
//             return data },
//            onError: (data: { error: string }) => {
//       toast.add({
//         type: 'error',
//         title: data.error,
//         description: 'Sunday, December 3 at 9:00 AM',
//       })
//       return data
//     },
//   })
// }



import type { ILoginPayLoad, IRegisterPayLoad } from './type'
import axios from 'axios'
import { toast } from '@/components/ui/toast'

import { useNavigate } from '@tanstack/react-router'
import useAuthStore from '@/stores/useAuthStore'
import { useMutation } from '@tanstack/react-query'

const register = async (payload: IRegisterPayLoad) => {
  const response = await axios.post(
    'http://118.27.148.199:3080/api/auth/register',
    payload,
  )
  return response.data
}

export const useRegisterMutation = () => {
  const navigate = useNavigate()

  const { setInfo } = useAuthStore()

  return useMutation({
    mutationFn: (payload: IRegisterPayLoad) => register(payload),
    onSuccess: (data) => {
         setInfo(data.token, data.user)
      navigate({ to: '/dashboard' })
      return data
    },
    onError: (data: { error: string }) => {
      toast.add({
        type: 'error',
        title: data.error,
        description: 'Sunday, December 3 at 9:00 AM',
      })
      return data
    },
  })
}

// login
const login = async (payload: ILoginPayLoad) => {
    console.log(payload)
  const response = await axios.post(
    'http://118.27.148.199:3080/api/auth/login',
    payload,
  )
  console.log(response.data)
  return response.data
}

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const { setInfo } = useAuthStore()

  return useMutation({
    mutationFn: (payload: ILoginPayLoad) => login(payload),
    onSuccess: (data) => {
        setInfo(data.token, data.user)
      navigate({ to: '/dashboard' })
      return data
    },
    onError: (data: { error: string }) => {

      toast.add({
        type: 'error',
        title: data.error,
        description: 'Sunday, December 3 at 9:00 AM',
      })
      return data
    },
  })
}

