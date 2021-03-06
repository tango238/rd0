import { expect, test } from '@jest/globals'
import { Business } from './Business'
import { JsonSchemaBusiness, JsonSchemaState } from '../JsonSchema'
import { Usecase } from '../usecase/Usecase'
import { Information } from '../information/Information'
import { Variation } from '../state/Variation'
import { Condition } from '../state/Condition'
import { State } from '../state/State'
import { Actor } from '../actor/Actor'

test('resolve', () => {
  const source: JsonSchemaBusiness[] = [
    {
      name: 'business 1',
      buc: [{
        name: 'buc 1', activity: [
          {
            name: 'activity 1',
            used_by: ['actor 1'],
            usecase: ['usecase 1']
          }
        ]
      }]
    }
  ]
  const actor = Actor.resolve([{ name: 'actor 1' }])
  const resolved = Business.resolve(source, actor, usecase())
  expect(resolved.errors.length).toBe(0)
})

test('resolved - ビジネスが重複している', () => {
  const source: JsonSchemaBusiness[] = [
    {
      name: 'business 1',
      buc: [{
        name: 'buc 1', activity: [
          {
            name: 'activity 1',
            used_by: ['actor 1'],
            usecase: ['usecase 1']
          }
        ]
      }]
    },
    {
      name: 'business 1',
      buc: [{
        name: 'buc 2', activity: [
          {
            name: 'activity 2',
            used_by: ['actor 1'],
            usecase: ['usecase 1']
          }
        ]
      }]
    }
  ]
  const actor = Actor.resolve([{ name: 'actor 1' }])
  const resolved = Business.resolve(source, actor, usecase())
  expect(resolved.errors.length).toBe(1)
})

test('resolve - BUCが重複している', () => {
  const source: JsonSchemaBusiness[] = [
    {
      name: 'business 1',
      buc: [
        {
          name: 'buc 1', activity: [
            {
              name: 'activity 1',
              used_by: ['actor 1'],
              usecase: ['usecase 1']
            }
          ]
        },
        {
          name: 'buc 1', activity: [
            {
              name: 'activity 2',
              used_by: ['actor 1'],
              usecase: ['usecase 1']
            }
          ]
        }
      ]
    }
  ]
  const actor = Actor.resolve([{ name: 'actor 1' }])
  const resolved = Business.resolve(source, actor, usecase())
  expect(resolved.errors.length).toBe(1)
})

test('resolve - アクティビティが重複している', () => {
  const source: JsonSchemaBusiness[] = [
    {
      name: 'business 1',
      buc: [
        {
          name: 'buc 1', activity: [
            {
              name: 'activity 1',
              used_by: ['actor 1'],
              usecase: ['usecase 1']
            },
            {
              name: 'activity 1',
              used_by: ['actor 1'],
              usecase: ['usecase 1']
            }
          ]
        },
      ]
    }
  ]
  const actor = Actor.resolve([{ name: 'actor 1' }])
  const resolved = Business.resolve(source, actor, usecase())
  expect(resolved.errors.length).toBe(1)
})

test('resolve - アクターが未登録', () => {
  const source: JsonSchemaBusiness[] = [
    {
      name: 'business 1',
      buc: [
        {
          name: 'buc 1', activity: [
            {
              name: 'activity 1',
              used_by: ['actor not exists'],
              usecase: ['usecase 1']
            },
          ]
        },
      ]
    }
  ]
  const actor = Actor.resolve([{ name: 'actor 1' }])
  const resolved = Business.resolve(source, actor, usecase())
  expect(resolved.errors.length).toBe(1)
})

test('resolve - 同じアクターが複数回', () => {
  const source: JsonSchemaBusiness[] = [
    {
      name: 'business 1',
      buc: [
        {
          name: 'buc 1', activity: [
            {
              name: 'activity 1',
              used_by: ['actor 1', 'actor 1'],
              usecase: ['usecase 1']
            },
          ]
        },
      ]
    }
  ]
  const actor = Actor.resolve([{ name: 'actor 1' }])
  const resolved = Business.resolve(source, actor, usecase())
  expect(resolved.errors.length).toBe(1)
})

test('resolve - ユースケースが未登録', () => {
  const source: JsonSchemaBusiness[] = [
    {
      name: 'business 1',
      buc: [
        {
          name: 'buc 1', activity: [
            {
              name: 'activity 1',
              used_by: ['actor 1'],
              usecase: ['usecase not exist']
            },
          ]
        },
      ]
    }
  ]
  const actor = Actor.resolve([{ name: 'actor 1' }])
  const resolved = Business.resolve(source, actor, usecase())
  expect(resolved.errors.length).toBe(1)
})

test('resolve - 同じユースケースが複数回', () => {
  const source: JsonSchemaBusiness[] = [
    {
      name: 'business 1',
      buc: [
        {
          name: 'buc 1', activity: [
            {
              name: 'activity 1',
              used_by: ['actor 1'],
              usecase: ['usecase 1', 'usecase 1']
            },
          ]
        },
      ]
    }
  ]
  const actor = Actor.resolve([{ name: 'actor 1' }])
  const resolved = Business.resolve(source, actor, usecase())
  expect(resolved.errors.length).toBe(1)
})

const information = () => {
  return Information.resolve([
    { name: 'info 1', related: ['info 2'] },
    { name: 'info 2', related: ['info 1'] }
  ])
}

const variation = () => {
  return Variation.resolve([
    { name: 'variation 1', value: ['value 1'] }
  ])
}

const condition = () => Condition.resolve([{ name: 'condition 1' }], state(), variation())

const state = () => {
  const source: JsonSchemaState[] = [
    {
      group: 'group 1', value: [
        {
          name: 'state 1', usecase:
            {
              name: 'usecase 1', next_state: 'state 2'
            }
        },
        {
          name: 'state 2', usecase:
            {
              name: 'usecase 2', next_state: 'state 1'
            }
        }
      ]
    }
  ]

  return State.resolve(source)
}

const usecase = () => {
  const source = [
    { name: 'usecase 1', view: ['view 1'], information: ['info 1'], condition: ['condition 1'] }
  ]
  return Usecase.resolve(source, information(), condition())
}
