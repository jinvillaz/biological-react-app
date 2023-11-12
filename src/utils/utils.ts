import { DataModel } from '../model/DataModel'
import dataLoaded from './biom.json'

const STRAIN_LEVEL = 7

export const generateData = (): DataModel[] => {
  let index = 0
  const result = dataLoaded.rows.map(row => {
    const relativeAbundance = Number((dataLoaded.data[index++][2] * 100).toFixed(2))
    const abundanceScore = Number(dataLoaded.data[index++][2].toFixed(2))
    const uniqueMatchesFrequency = Math.round(dataLoaded.data[index++][2])
    const newItem: DataModel = {
      id: row.id,
      name: row.metadata.lineage[STRAIN_LEVEL].name,
      taxId: row.metadata.lineage[STRAIN_LEVEL].tax_id,
      abundanceScore,
      relativeAbundance,
      uniqueMatchesFrequency,
    }
    return newItem
  })
  return result
}
