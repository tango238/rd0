import { Actor } from '~/domain/model/rdra/actor/Actor'
import { InternalSystem } from '~/domain/model/rdra/actor/InternalSystem'
import { ExternalSystem } from '~/domain/model/rdra/actor/ExternalSystem'
import { Information } from '~/domain/model/rdra/information/Information'
import { Usecase } from '~/domain/model/rdra/usecase/UseCase'
import { State } from '~/domain/model/rdra/state/State'
import { Variation } from '~/domain/model/rdra/state/Variation'
import { Condition, ConditionOfVariation } from '~/domain/model/rdra/state/Condition'
import { StateTransition } from '~/domain/model/rdra/state/StateTransition'
import { Business } from '~/domain/model/rdra/business/Business'
import { JsonSchema } from '~/domain/model/rdra/JsonSchema'

export type ErrorReport = string[]

export class RDRA {

  public static build(source: JsonSchema) {

    // --------------------------------------
    // アクター
    const srcActor = source.actor.map(actor => typeof actor == "object" ? actor : { name: actor })
    const actor = Actor.resolve(srcActor)

    const srcInternal = source.internalSystem.map(internal => typeof internal == "object" ? internal : { name: internal })
    const internalSystem = InternalSystem.resolve(srcInternal)

    const srcExternal = source.externalSystem.map(external => typeof external == "object" ? external : { name: external })
    const externalSystem = ExternalSystem.resolve(srcExternal)

    // --------------------------------------
    // 情報
    const information = Information.resolve(source.information)

    // --------------------------------------
    // 状態
    const state = State.resolve(source.state)

    // --------------------------------------
    // バリエーション
    const variation = Variation.resolve(source.variation)

    // --------------------------------------
    // 条件
    // 条件 -> 状態, バリエーション
    const condition = Condition.resolve(source.condition, state, variation)

    // --------------------------------------
    // UC複合
    // UC複合 -> 情報, 条件
    const usecase = Usecase.resolve(
      source.usecase, information, condition
    )

    // --------------------------------------
    // 状態遷移
    // 状態 -> UC複合
    const transition = StateTransition.resolve(source.state, state, usecase)

    // --------------------------------------
    // 業務
    // BUC -> アクター, UC複合
    const business = Business.resolve(source.business, actor, usecase)

    const resolved = {
      actor,
      internalSystem,
      externalSystem,
      information,
      state,
      transition,
      variation,
      condition,
      business,
      usecase
    }

    const errorReporter = new ErrorReporter(resolved)
    if (errorReporter.hasError()) {
      errorReporter.report()
      return
    }

    const charter = new RelationshipCharter(resolved)
    charter.report()
  }
}

type ResolvedData = {
  actor: Actor,
  internalSystem: InternalSystem,
  externalSystem: ExternalSystem,
  information: Information,
  state: State,
  transition: StateTransition,
  variation: Variation,
  condition: Condition,
  business: Business,
  usecase: Usecase
}

class ErrorReporter {

  constructor(
    input: ResolvedData
  ) {
  }

  hasError(): boolean {
    return false
  }

  report() {
  }
}

class RelationshipCharter {
  constructor(
    input: ResolvedData
  ) {
  }

  report() {
  }
}
