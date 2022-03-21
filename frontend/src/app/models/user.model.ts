export interface User{
  _id: string,
  email: string,
  password: string,
  avatar?: string,
  displayName: string,
  token: string,
  role: string,

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
export interface LoginUserData {
  email: string,
  password: string,
}


export interface LoginError {
  error: string
}

