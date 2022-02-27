import { LoaderFunction, useLoaderData } from 'remix'
import path from 'path'
import fs from 'fs'
import YAML from 'yaml'
import { SourceModel } from '~/domain/model/rdra/RDRA'


export const loader: LoaderFunction = async () => {
  const filename = path.join(__dirname, "..", "data", "rdra", "rdra.yml")
  const file = fs.readFileSync(filename, 'utf-8',)
  return YAML.parse(file) as SourceModel
}

export default function View() {
  const model = useLoaderData<SourceModel>()
  return (
    <div style={{ margin: '12px' }}>
      <h2>アクター</h2>
      <ul>
        {model.actor.map(a => (
          <li>{a.name}</li>
        ))}
      </ul>
      <hr/>
      <h2>外部システム</h2>
      <ul>
        {model.externalSystem.map(s => (
          <li>{s.name}</li>
        ))}
      </ul>
      <hr/>
      <h2>情報</h2>
      <ul>
        {model.information.map(i => (
          <li>{i.name}</li>
        ))}
      </ul>
    </div>
  )
}