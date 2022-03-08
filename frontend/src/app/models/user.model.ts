export interface User{
  _id: string,
  email: string,
  password: string,
  avatar?: string,
  displayName: string,
  token: string

}


export interface RegisterUserData {
  email: string,
  password: string,
  avatar: File | null,
  displayName: string,

}

export interface FieldError{
  message: string
}


export interface RegisterError{
  errors: {
    password: FieldError,
    email: FieldError,
    displayName: FieldError
  }

}
