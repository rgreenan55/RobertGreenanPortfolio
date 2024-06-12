import { Button, IconButton } from '@mui/material';
import { TabPanel } from '@mui/lab';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { GitHub, LinkOff } from '@mui/icons-material';

type Props = {
    value : string,
    headers ?: GridColDef<any>[],
    rows : any,
}

const DetailsButton = (params : GridRenderCellParams) => {
    console.log(params.value);

    return (
        <Button
            variant='text'
            color='secondary'
            sx={{ width: '100%', height: '100%' }}
        >
            W.I.P {/* Details */}
        </Button>
    )
}

const LinkButton = (params : GridRenderCellParams) => {
    const onClick = () => {
        if (params.value) window.open(params.value, '_blank')
    }

    return (
        <IconButton onClick={onClick} disabled={!params.value} style={{ width: '100%', height: '100%', borderRadius: 0 }}>
            {params.value ? <GitHub /> : <LinkOff />}
        </IconButton>
    )
}

const ProjectsTable = ({ value, headers = defaultHeaders, rows = [] } : Props) => {
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
                    '& .MuiDataGrid-columnSeparator': { display: 'none' },
                }}
            />
        </TabPanel>
    )
}

export default ProjectsTable;

const defaultHeaders : GridColDef<any>[] = [
    { field: 'projectName', headerName: 'Project Name', flex: 5 },
    { field: 'contribution', headerName: 'Contribution', flex: 5, },
    { field: 'date', headerName: 'Start Date', flex: 2, headerAlign: 'center', align: 'center' },
    { field: 'link', headerName: 'Link', flex: 1, headerAlign: 'center', align: 'center', renderCell: LinkButton },
    { field: 'details', headerName: 'Details', flex: 2, headerAlign: 'center', align: 'center', renderCell: DetailsButton},
]