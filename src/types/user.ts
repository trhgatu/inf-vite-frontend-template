export interface IUser {
  _id: string
  fullName: string
  email: string
  roleId: string
  status: 'active' | 'inactive' | 'banned'
  createdAt?: string
  updatedAt?: string
}
