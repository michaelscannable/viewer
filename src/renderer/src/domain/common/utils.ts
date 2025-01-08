// ts-worksheet-with-variables
import { Schema } from 'effect'
import {
  ProductData,
  UnitType,
  TextProductData,
  NumericUnits,
  timeUnits,
  forceUnits,
  lengthUnits,
  temperatureUnits,
  weightUnits,
  powerUnits,
  voltageUnits,
  percentageUnits
} from '../models/product'
import { getProductData } from '../../components/data'

export function createProductValue(data: typeof ProductData.Type) {
  switch (data.type) {
    case 'numeric':
      const type = data.unitType
      switch (type) {
        case UnitType.LENGTH:
          return data.convertedValue
        case UnitType.WEIGHT:
        case UnitType.FORCE:
        case UnitType.TEMPERATURE:
        case UnitType.POWER:
        case UnitType.VOLTAGE:
        case UnitType.PERCENTAGE:
        case UnitType.TIME:
          return data.value
        default:
          throw new Error('Invalid product data')
      }
    case 'text':
    case 'string':
      return data.value
    case 'url':
      return data.value
    case 'pdf':
      return data.value
    case 'image':
    case 'photo':
      return data.value
    case 'certifications':
      return data.value
    case 'video_embed':
      return data.value
    case 'inspection':
      return data.value
    case 'printer_icon':
      return data.value
    default:
      throw new Error('Invalid product data type')
  }
}

export function createProductData(productData: typeof ProductData.Type): typeof ProductData.Type {
  const decoder = Schema.decodeUnknownSync(ProductData)
  const data = decoder(productData)
  switch (data.type) {
    case 'numeric':
      const type = data.unitType
      switch (type) {
        case UnitType.WEIGHT:
        case UnitType.FORCE:
        case UnitType.TEMPERATURE:
        case UnitType.POWER:
        case UnitType.VOLTAGE:
        case UnitType.PERCENTAGE:
        case UnitType.TIME:
          return data
        default:
          throw new Error('Invalid product data')
      }
    case 'text':
    case 'string':
      return data
    case 'url':
      return data
    case 'pdf':
      return data
    case 'image':
    case 'photo':
      return data
    case 'certifications':
      return data
    case 'video_embed':
      return data
    case 'inspection':
      return data
    case 'printer_icon':
      return data
    default:
      throw new Error('Invalid product data')
  }
}

export type ProductDataType = typeof ProductData.Type
export const decoder = Schema.decodeUnknownSync(ProductData)

// const wkDecoder = Schema.decodeUnknownSync(WithKind)

// wkDecoder({
//   id: 31597,
//   key: 'guarantee',
//   name: 'Guarantee',
//   unit: 'years',
//   type: 'numeric',
//   value: { value: '1', source_value: null },
//   availableUnits: [{ label: 'Years', value: 'years' }],
//   valueForDisplay: '1'
//   ok: 1,
// })

// const WithKind = Schema.Struct({ ...Stop.fields, kind: UnitKind })

// const DiscriminatedShape = Schema.Union(
//   Schema.transform(Stop, WithKind, {
//     strict: true,
//     decode: (circle) => ({ ...circle, kind: 'TIME' as const }),
//     encode: ({ kind: _kind, ...rest }) => ({
//       ...rest
//     })
//   })
// )

// export const timeDecoder = Schema.decodeUnknownSync(DiscriminatedShape)

// console.log(
//   timeDecoder({
//     id: 31597,
//     key: 'guarantee',
//     name: 'Guarantee',
//     value: { value: '1', source_value: null },
//     unit: 'years',
//     type: 'numeric'
//   })
// )
export function createValue(data: ProductDataType) {
  const decoded = decoder(data)
  return createProductValue(decoded)
}

const data = getProductData().data[0].product_data

const dateData = {
  id: 31597,
  key: 'guarantee',
  name: 'Guarantee',
  value: { value: '1', source_value: null },
  unit: 'years',
  type: 'string',
  // unitType: UnitType.TIME,
  availableUnits: [{ label: 'Years', value: 'years' }],
  valueForDisplay: '1'
}

const isNumericData = (type: string) => type === 'numeric'

// console.log(isNumericData(dateData.type))

// timeDecoder({
//   id: 31597,
//   key: 'guarantee',
//   name: 'Guarantee',
//   value: { value: '1', source_value: null },
//   unit: 'years',
//   type: 'numeric',
//   // unitType: UnitType.TIME,
//   availableUnits: [{ label: 'Years', value: 'years' }],
//   valueForDisplay: '1'
// })
// console.log(data.length)
for (const item of data) {
  try {
    if (isNumericData(item.type)) {
      //  we need to assign unitType to the item
      if (item.unit) {
        const unitType = Schema.decodeUnknownSync(NumericUnits)(item.unit)

        if (unitType) {
          if (timeUnits.includes(unitType)) {
            item['unitType'] = UnitType.TIME
          }
          if (lengthUnits.includes(unitType)) {
            item['unitType'] = UnitType.LENGTH
          }
          if (weightUnits.includes(unitType)) {
            item['unitType'] = UnitType.WEIGHT
          }
          if (forceUnits.includes(unitType)) {
            item['unitType'] = UnitType.FORCE
          }
          if (temperatureUnits.includes(unitType)) {
            item['unitType'] = UnitType.TEMPERATURE
          }
          if (powerUnits.includes(unitType)) {
            item['unitType'] = UnitType.POWER
          }
          if (voltageUnits.includes(unitType)) {
            item['unitType'] = UnitType.VOLTAGE
          }

          if (percentageUnits.includes(unitType)) {
            item['unitType'] = UnitType.PERCENTAGE
          }
        } else {
          console.log('unitType', unitType)
          continue
        }
      }
    }
    const i = decoder(item)
    if (TextProductData.is(i)) {
      console.log('TextProductData', i)
    } else {
    }
  } catch (e) {
    console.log('error', {
      item,
      error: e
    })
  }
}
