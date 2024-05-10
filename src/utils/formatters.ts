export function formatPhone(value: string) {
  const cleanedValue = value.replace(/[^0-9]/g, '').slice(0, 12)

  const countryCode = '+38'
  const areaCode = cleanedValue.slice(2, 5)
  const firstPart = cleanedValue.slice(5, 7)
  const secondPart = cleanedValue.slice(7, 10)
  const thirdPart = cleanedValue.slice(10, 12)

  let formattedPhoneNumber = countryCode
  if (areaCode) formattedPhoneNumber += ` ${areaCode}`
  if (firstPart) formattedPhoneNumber += ` ${firstPart}`
  if (secondPart) formattedPhoneNumber += ` ${secondPart}`
  if (thirdPart) formattedPhoneNumber += ` ${thirdPart}`

  return formattedPhoneNumber
}

export function formatPostcode(value: string) {
  const formattedValue = value.replace(/[^0-9]/g, '').slice(0, 5)
  return formattedValue
}

export function formatCardExpiryDate(value: string): string {
  let formattedValue = value.replace(/[^0-9]/g, '')
  let month = formattedValue.slice(0, 2)
  let year = formattedValue.slice(2, 4)

  if (month.length === 2 && Number(month) > 12) month = '12'
  else if (month.length === 1 && month[0] !== '0' && month[0] !== '1') month = ''

  if (value.length > 1) formattedValue = `${month}/${year}`
  else formattedValue = month

  return formattedValue
}

export function formatCardCvv(value: string): string {
  const formattedValue = value.replace(/[^0-9]/g, '').slice(0, 3)
  return formattedValue
}

export function formatText(value: string): string {
  const cleanedValue = value.replace(/[^а-щА-ЩіІїЇєЄґҐa-zA-Z'\s-]/g, '').slice(0, 80)
  return cleanedValue
}
