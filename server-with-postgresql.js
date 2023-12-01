import { createApp } from './app.js'
import { InventoryModel } from './models/postgresql/inventory.js'
import { LaboratoryModel } from './models/postgresql/laboratory.js'
import { LoginModel } from './models/postgresql/login.js'
import { RegisterModel } from './models/postgresql/register.js'
import { ScheduleModel } from './models/postgresql/schedule.js'
import { SoftwareModel } from './models/postgresql/software.js'

createApp({
  laboratoryModel: LaboratoryModel,
  softwareModel: SoftwareModel,
  loginModel: LoginModel,
  registerModel: RegisterModel,
  inventoryModel: InventoryModel,
  scheduleModel: ScheduleModel
})
