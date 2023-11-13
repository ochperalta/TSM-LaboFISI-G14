import { createApp } from './app.js'
import { LaboratoryModel } from './models/postgresql/laboratory.js'
import { LoginModel } from './models/postgresql/login.js'
import { RegisterModel } from './models/postgresql/register.js'
import { SoftwareModel } from './models/postgresql/software.js'

createApp({
  laboratoryModel: LaboratoryModel,
  softwareModel: SoftwareModel,
  loginModel: LoginModel,
  registerModel: RegisterModel
})
