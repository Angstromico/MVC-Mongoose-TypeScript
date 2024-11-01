import { UserModel } from 'models/UserModel'

export const getUser = UserModel.find()
export const getUserByEmail = (email: string) => UserModel.findOne({ email })
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ 'authentication.sessionToke': sessionToken })
export const getUserById = (id: string) => UserModel.findById({ id })
export const createUser = (values: Record<string, any>) => new UserModel(values)
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id })
export const UpdateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values)
