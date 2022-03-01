import { Actor } from '~/domain/model/rdra/actor/Actor'
import { ExternalSystem } from '~/domain/model/rdra/system/ExternalSystem'
import { Information } from '~/domain/model/rdra/information/Information'

export type SourceModel = {
  actor: (SourceActorJSON | string)[]
  internalSystem: (SourceInternalSystemJSON | string)[]
  externalSystem: (SourceExternalSystemJSON | string)[]
  information: SourceInformationJSON[]
}

type SourceActorJSON = {
  name: string
  description?: string
}

type SourceExternalSystemJSON = {
  name: string
  description?: string
}

type SourceInternalSystemJSON = {
  name: string
  description?: string
}

type SourceInformationJSON = {
  name: string
  description?: string
}


export class RDRA {

  public static build(source: SourceModel){

    const srcActor = source.actor.map(actor => typeof actor == "object" ? actor : { name: actor } )
    const actor = Actor.resolve(srcActor)

    const srcInternal = source.internalSystem.map(internal => typeof internal == "object" ? internal : { name: internal } )
    const internalSystem = ExternalSystem.resolve(srcInternal)

    const srcExternal = source.externalSystem.map(external => typeof external == "object" ? external : { name: external } )
    const externalSystem = ExternalSystem.resolve(srcExternal)

    const information = Information.resolve(source.information)
  }
}