// ts-worksheet-with-variables

import { Schema } from 'effect'
export const lengthUnits = ['mm', 'cm', 'm', 'in', 'ft']
export const weightUnits = ['g', 'kg', 'lb', 'oz', 't']
export const forceUnits = ['N', 'kN', 'lbf']
export const temperatureUnits = ['°C', '°F']
export const powerUnits = ['bhp', 'kW']
export const voltageUnits = ['V']
export const percentageUnits = ['%']
export const timeUnits = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']

export const LengthUnit = Schema.Literal(...lengthUnits)

export const WeightUnit = Schema.Literal(...weightUnits)

export const ForceUnit = Schema.Literal(...forceUnits)

export const TemperatureUnit = Schema.Literal(...temperatureUnits)

export const PowerUnit = Schema.Literal(...powerUnits)

export const VoltageUnit = Schema.Literal(...voltageUnits)

export const PercentageUnit = Schema.Literal(...percentageUnits)

export const TimeUnit = Schema.Literal(...timeUnits)

export const NumericUnits = Schema.Union(
  LengthUnit,
  WeightUnit,
  ForceUnit,
  TemperatureUnit,
  PowerUnit,
  VoltageUnit,
  PercentageUnit,
  TimeUnit
)

export enum UnitType {
  LENGTH = 'LENGTH',
  WEIGHT = 'WEIGHT',
  FORCE = 'FORCE',
  TEMPERATURE = 'TEMPERATURE',
  POWER = 'POWER',
  VOLTAGE = 'VOLTAGE',
  PERCENTAGE = 'PERCENTAGE',
  TIME = 'TIME'
}

export const UnitKind = Schema.Literal(
  'LENGTH',
  'WEIGHT',
  'FORCE',
  'TEMPERATURE',
  'POWER',
  'VOLTAGE',
  'PERCENTAGE',
  'TIME'
)

export const RawProductData = Schema.Struct({
  id: Schema.Number,
  key: Schema.String,
  name: Schema.String,
  availableUnits: Schema.Unknown,
  valueForDisplay: Schema.Unknown
})

export const NumericType = Schema.Literal('numeric')
export const TextType = Schema.Literal('text', 'string')
export const URLType = Schema.Literal('url')
export const PDFType = Schema.Literal('pdf')
export const ImageType = Schema.Literal('image', 'photo')

export const CertificationType = Schema.Literal('certifications')
export const VideoEmbedType = Schema.Literal('video_embed')
export const InspectionType = Schema.Literal('inspection')
export const PrinterIconType = Schema.Literal('printer_icon')

export const DataTypes = Schema.Union(
  NumericType,
  TextType,
  URLType,
  PDFType,
  ImageType,
  CertificationType,
  VideoEmbedType,
  InspectionType,
  PrinterIconType
)

export const ValueObject = Schema.Struct({
  value: Schema.String,
  source_value: Schema.Union(Schema.String, Schema.Null)
})

export const ValueObjectWithId = Schema.Struct({
  internalId: Schema.Number,
  value: Schema.String,
  source_value: Schema.Union(Schema.String, Schema.Null)
})

export class BaseProductData extends Schema.Class<BaseProductData>('BaseProductData')({
  id: Schema.Number,
  key: Schema.String,
  name: Schema.String,
  unit: Schema.String,
  availableUnits: Schema.Unknown,
  valueForDisplay: Schema.String
}) {}

export class LengthProductData extends BaseProductData.extend<LengthProductData>(
  'LengthProductData'
)({
  value: Schema.Struct({
    unit: LengthUnit,
    value: Schema.String
  }),
  unitType: Schema.Literal(UnitType.LENGTH),
  type: NumericType
}) {
  static is = Schema.is(this)
  get convertedValue() {
    return `${this.value.value} ${this.value.unit}`
  }
}

export class WeightProductData extends BaseProductData.extend<WeightProductData>(
  'WeightProductData'
)({
  value: Schema.Struct({
    unit: WeightUnit,
    value: Schema.String
  }),
  unitType: Schema.Literal(UnitType.WEIGHT),
  type: NumericType
}) {
  static is = Schema.is(this)
}

const ImageValue = Schema.Struct({
  s3Key: Schema.String,
  value: Schema.String,
  internalId: Schema.Number
})

export class ImageProductData extends BaseProductData.extend<ImageProductData>('ImageProductData')({
  value: Schema.Union(ImageValue, Schema.Array(ImageValue)),
  type: ImageType
}) {
  static is = Schema.is(this)
}

export class ForceProductData extends BaseProductData.extend<ForceProductData>('ForceProductData')({
  value: Schema.Struct({
    unit: ForceUnit,
    value: Schema.String
  }),
  type: NumericType,
  unitType: Schema.Literal(UnitType.FORCE)
}) {
  static is = Schema.is(this)
}

export class TemperatureProductData extends BaseProductData.extend<TemperatureProductData>(
  'TemperatureProductData'
)({
  value: Schema.Struct({
    unit: TemperatureUnit,
    value: Schema.String
  }),
  type: NumericType,
  unitType: Schema.Literal(UnitType.TEMPERATURE)
}) {
  static is = Schema.is(this)
}

export class PowerProductData extends BaseProductData.extend<PowerProductData>('PowerProductData')({
  value: Schema.Struct({
    unit: PowerUnit,
    value: Schema.String
  }),
  type: NumericType,
  unitType: Schema.Literal(UnitType.POWER)
}) {
  static is = Schema.is(this)
}

export class VoltageProductData extends BaseProductData.extend<VoltageProductData>(
  'VoltageProductData'
)({
  value: Schema.Struct({
    unit: VoltageUnit,
    value: Schema.String
  }),
  type: NumericType,
  unitType: Schema.Literal(UnitType.VOLTAGE)
}) {
  static is = Schema.is(this)
}

export class PercentageProductData extends BaseProductData.extend<PercentageProductData>(
  'PercentageProductData'
)({
  value: Schema.Struct({
    unit: PercentageUnit,
    value: Schema.String
  }),
  type: NumericType,
  unitType: Schema.Literal(UnitType.PERCENTAGE)
}) {}

export class TimeProductData extends BaseProductData.extend<TimeProductData>('TimeProductData')({
  value: Schema.Struct({
    unit: TimeUnit.pipe(Schema.optionalWith({ default: () => 'years' })),
    value: Schema.String.pipe(Schema.optionalWith({ default: () => '' }))
  }),
  type: NumericType,
  unitType: Schema.Literal(UnitType.TIME)
}) {}

export class TextProductData extends BaseProductData.extend<TextProductData>('TextProductData')({
  value: ValueObject,
  type: TextType
}) {
  static is = Schema.is(this)
}

export class URLProductData extends BaseProductData.extend<URLProductData>('URLProductData')({
  value: ValueObject,
  type: URLType
}) {
  static is = Schema.is(this)
}

export class PDFProductData extends BaseProductData.extend<PDFProductData>('PDFProductData')({
  value: Schema.Array(ValueObjectWithId).pipe(
    Schema.optionalWith({
      default: () => []
    })
  ),
  type: PDFType
}) {
  static is = Schema.is(this)
}

export class CertificationProductData extends BaseProductData.extend<CertificationProductData>(
  'CertificationProductData'
)({
  value: Schema.Array(ValueObjectWithId).pipe(
    Schema.optionalWith({
      default: () => []
    })
  ),
  type: CertificationType
}) {
  static is = Schema.is(this)
}

export class VideoEmbedProductData extends BaseProductData.extend<VideoEmbedProductData>(
  'VideoEmbedProductData'
)({
  value: ValueObject,
  type: VideoEmbedType
}) {
  static is = Schema.is(this)
}

export class InspectionProductData extends BaseProductData.extend<InspectionProductData>(
  'InspectionProductData'
)({
  value: Schema.Array(ValueObjectWithId).pipe(
    Schema.optionalWith({
      default: () => []
    })
  ),
  type: InspectionType
}) {
  static is = Schema.is(this)
}

export class PrinterIconProductData extends BaseProductData.extend<PrinterIconProductData>(
  'PrinterIconProductData'
)({
  value: ValueObject,
  type: PrinterIconType
}) {
  static is = Schema.is(this)
}

export const NumericProductData = Schema.Union(
  LengthProductData,
  WeightProductData,
  ForceProductData,
  TemperatureProductData,
  PowerProductData,
  VoltageProductData,
  PercentageProductData,
  TimeProductData
)

export const ProductData = Schema.Union(
  NumericProductData,
  WeightProductData,
  ImageProductData,
  ForceProductData,
  TemperatureProductData,
  PowerProductData,
  VoltageProductData,
  PercentageProductData,
  TimeProductData,
  TextProductData,
  URLProductData,
  PDFProductData,
  ImageProductData,
  CertificationProductData,
  VideoEmbedProductData,
  InspectionProductData,
  PrinterIconProductData
)
