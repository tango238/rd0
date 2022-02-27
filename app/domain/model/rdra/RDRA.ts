import { Actor } from '~/domain/model/rdra/actor/Actor'
import { ExternalSystem } from '~/domain/model/rdra/external/ExternalSystem'
import { Information } from '~/domain/model/rdra/information/Information'

export type SourceModel = {
  actor: ActorJSON[]
  externalSystem: ExternalSystemJSON[]
  information: InformationJSON[]
}

type ActorJSON = {
  name: string
  description?: string
}

type ExternalSystemJSON = {
  name: string
  description?: string
}

type InformationJSON = {
  name: string
  description?: string
}


export class RDRA {

  public static build(source: SourceModel){
    const actor = Actor.build(source.actor)
    const externalSystem = ExternalSystem.build(source.externalSystem)
    const information = Information.build(source.information)
  }
}