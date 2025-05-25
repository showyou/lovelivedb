import Csv2rdf from './csv2rdf'
import * as fs from 'fs'
import * as rimraf from 'rimraf'

const main = async () => {
  // virtuosoディレクトリを削除し，virtuoso/toLoadディレクトリを作成
  if(fs.existsSync('../virtuoso/data')) rimraf.sync('../virtuoso/data')
  fs.mkdirSync('../virtuoso/data')
  fs.mkdirSync('../virtuoso/data/toLoad')

  // schema.ttl を作成
  const schema = new Csv2rdf()
  await schema.load('../_data/schema/classes-setting.json')
  await schema.load('../_data/schema/properties-setting.json')
  await schema.export('../virtuoso/data/toLoad/lovelive-schema.ttl')

  // webでホストする schema.ttl も更新
  if(fs.existsSync('../web/assets/lovelive-schema.ttl')) fs.unlinkSync('../web/assets/lovelive-schema.ttl')
  await schema.export('../web/assets/lovelive-schema.ttl')

  // output.ttl(virtuosoにロードするデータ)を作成
  const csv2rdf = new Csv2rdf()
  await csv2rdf.load('../_data/character/hasunosora-characters-setting.json')
  await csv2rdf.load('../_data/project/projects-setting.json')
  await csv2rdf.load('../_data/song/songs-setting.json')
  //await csv2rdf.load('../_data/live/pripara-lives-setting.json')
  //await csv2rdf.load('../_data/live/hasu-lives-setting.json')
  await csv2rdf.load('../_data/unit-group/unit-groups-setting.json')
  await csv2rdf.load('../_data/unit/units-setting.json')
  //await csv2rdf.load('../_data/brand/brands-setting.json')
  await csv2rdf.export('../virtuoso/data/toLoad/output.ttl')
}

(async () => {
  await main().catch(e => {
    console.error(e)
    process.exit(1);
  })
})()
