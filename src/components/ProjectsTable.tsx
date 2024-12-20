import { IconButton } from '@mui/material';
import { GitHub, LinkOff } from '@mui/icons-material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { TabPanel } from '@mui/lab';

type Props = {
    value : string,
    rows : any,
}

// const DetailsButton = (detailsLink : string) => {
//     return (
//         <Button
//             variant='text'
//             color='secondary'
//             disabled={!detailsLink}
//             sx={{ width: '100%', height: '100%', '&:disabled' : { color: 'grey' } }}
//         >
//             {detailsLink ? 'Details' : '--'}
//         </Button>
//     )
// }

const LinkButton = (params : GridRenderCellParams) => {
    const onClick = () => { if (params.value) window.open(params.value, '_blank') }
    return (
        <IconButton onClick={onClick} disabled={!params.value} style={{ width: '100%', height: '100%', borderRadius: 0 }}>
            {params.value ? <GitHub /> : <LinkOff />}
        </IconButton>
    )
}

const ProjectsTable = ({ value, rows = [] } : Props) => {
    return (
        <TabPanel value={value} sx={{ px: 0, height: 'calc(100% - 48px)'}}>
            <DataGrid
                columns={headers}
                rows={rows}
                getRowId={row => row.id}
                onRowClick={() => null}
                hideFooterPagination
                disableRowSelectionOnClick
                disableColumnMenu
                disableColumnSorting
                disableColumnResize
                sx={{
                    '& .MuiDataGrid-cell[data-field="details"]': { padding: 0 },            // Remove Padding from Button Cell
                    '& .MuiDataGrid-cell[data-field="link"]': { padding: 0 },
                    '& .MuiDataGrid-cell:focus-within': { outline: 'none !important' },     // Removes Border Hover Color (was same as background)
                    '& .MuiDataGrid-columnSeparator': { display: 'none' },                  // Removes Column Seperator
                }}
            />
        </TabPanel>
    )
}

// Headers
const headers : GridColDef<any>[] = [
    { field: 'projectName', headerName: 'Project Name', flex: 7 },
    { field: 'date', headerName: 'Start Date', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'link', headerName: 'Link', flex: 1, headerAlign: 'center', align: 'center', renderCell: LinkButton },
    //{ field: 'details', headerName: 'Details', flex: 1, headerAlign: 'center', align: 'center', renderCell: (params) => DetailsButton(params.value)},
]

export default ProjectsTable;