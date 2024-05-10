export enum PaymentType {
  privat = 'privat24',
  terminal = 'terminal',
  webMoney = 'webmoney',
  paypal = 'paypal',
  visa = 'visa'
}

export enum HelpType {
  action = 'action',
  financial = 'financial',
  material = 'material',
  volunteering = 'volunteering'
}

export type UserData = {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  country: string
  city: string
  district: string
  address: string
  postcode: string
}

export type CardData = {
  cardNumber: string
  cardExpiry: string
  cardCvv: string
}
