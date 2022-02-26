import { LoaderFunction, useLoaderData } from 'remix'
import path from 'path'
import fs from 'fs'
import YAML from 'yaml'

type Data = {
  model: Model
}

type Model = {
  actor: Actor[]
  externalSystem: ExternalSystem[]
  information: Information[]
}

type Actor = {
  name: string
  description?: string
}

type ExternalSystem = {
  name: string
  description?: string
}

type Information = {
  name: string
  description?: string
}

export const loader: LoaderFunction = async () => {
  const filename = path.join(__dirname, "..", "data", "rdra", "rdra.yml")
  const file = fs.readFileSync(filename, 'utf-8',)
  const model = YAML.parse(file) as Model
  return {
    model
  }
}

export default function View() {
  const data = useLoaderData<Data>()
  return (
    <div style={{ margin: '12px' }}>
      <h2>アクター</h2>
      <ul>
        {data.model.actor.map(a => (
          <li>{a.name}</li>
        ))}
      </ul>
      <hr/>
      <h2>外部システム</h2>
      <ul>
        {data.model.externalSystem.map(s => (
          <li>{s.name}</li>
        ))}
      </ul>
      <hr/>
      <h2>情報</h2>
      <ul>
        {data.model.information.map(i => (
          <li>{i.name}</li>
        ))}
      </ul>
    </div>
  )
}