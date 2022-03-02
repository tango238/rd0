
export type JsonSchema = {
  actor: (JsonSchemaActor | string)[]
  internalSystem: (JsonSchemaInternalSystem | string)[]
  externalSystem: (JsonSchemaExternalSystem | string)[]
  information: JsonSchemaInformation[]
  usecase: JsonSchemaUsecase[]
  business: JsonSchemaBusiness[]
  state: JsonSchemaState[]
  variation: JsonSchemaVariation[]
  condition: JsonSchemaCondition[]
}

export type JsonSchemaActor = {
  name: string
  description?: string
}

export type JsonSchemaExternalSystem = {
  name: string
  description?: string
}

export type JsonSchemaInternalSystem = {
  name: string
  description?: string
}

export type JsonSchemaInformation = {
  name: string
  description?: string
}

export type JsonSchemaUsecase = {
  name: string
  view: string[]
  information: string[]
  condition: string[]
  // event: string[]
}

export type JsonSchemaBusiness = {
  name: string
  buc: SourceBucJSON[]
}

export type SourceBucJSON = {
  name: string
  activity: SourceActivityJSON[]
}

export type SourceActivityJSON = {
  name: string
  used_by: string[]
  usecase: string[]
}

export type JsonSchemaState = {
  group: string
  value: SourceStateValueJSON[]
}

export type SourceStateValueJSON = {
  name: string
  usecase: SourceUsecaseForState
}

export type SourceUsecaseForState = {
  name: string
  next_state: string
}

export type JsonSchemaVariation = {
  name: string
  value: string[]
}

export type JsonSchemaCondition = {
  name: string
  description?: string
  variation?: string[]
  state?: string
}
