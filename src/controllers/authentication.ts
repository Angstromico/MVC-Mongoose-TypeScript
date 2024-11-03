import express from 'express'
import { createUser, getUserByEmail } from './UserController'
import { authentication, random } from 'helpers'

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body

    if (!email || !password || !username) {
      return res.status(400)
    }
    const existingUser = await getUserByEmail(email)

    if (existingUser) {
      return res.status(400)
    }

    const salt = random()
    const user = await createUser({
      email,
      username,
      authentication: authentication(salt, password),
    })

    return res.status(200).json(user).end()
  } catch (error) {
    console.error(error)
    return res.status(400)
  }
}
