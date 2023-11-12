import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { generateData } from '../../utils/utils'
import { DataModel } from '../../model/DataModel'

interface DataType {
  value: number
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', minWidth: 250, flex: 1 },
  { field: 'taxId', headerName: 'Tax ID', minWidth: 100, flex: 0.6, headerAlign: 'right', align: 'right' },
  {
    field: 'abundanceScore',
    headerName: 'Abundance score',
    minWidth: 100,
    flex: 0.6,
    headerAlign: 'right',
    align: 'right',
  },
  {
    field: 'relativeAbundance',
    headerName: 'Relative abundance',
    minWidth: 100,
    flex: 0.6,
    headerAlign: 'right',
    align: 'right',
    valueFormatter: ({ value }: DataType) => {
      return value < 0.01 ? '"<0.01%"' : `${value}%`
    },
  },
  {
    field: 'uniqueMatchesFrequency',
    headerName: 'Unique matches frequency',
    minWidth: 100,
    flex: 0.6,
    headerAlign: 'right',
    align: 'right',
  },
]

export const Home = () => {
  const [rows, setRows] = useState<DataModel[]>([])
  useEffect(() => {
    const data: DataModel[] = generateData()
    setRows(data)
  }, [])

  return (
    <Container maxWidth="lg" sx={{ flex: 1, p: 5 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 15]}
      />
    </Container>
  )
}
