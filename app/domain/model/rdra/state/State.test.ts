import { expect, test } from '@jest/globals'
import { State } from './State'
import { JsonSchemaState } from '~/domain/model/rdra/JsonSchema'

test('resolve with error', () => {
  const source: JsonSchemaState[] = [
    {
      group: 'group 1', value: [
        {
          name: 'state 1', usecase:
            {
              name: 'usecase 1', next_state: 'next state'
            }
        }
      ]
    },
    {
      group: 'group 1', value: [
        {
          name: 'state 2', usecase:
            {
              name: 'usecase 2', next_state: 'next state 2'
            }
        }
      ]
    }
  ]
  const resolved = State.resolve(source)
  expect(resolved.errors.length).toBe(1)
})