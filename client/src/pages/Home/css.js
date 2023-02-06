import { Box, Paper, Stack, styled, Typography } from "@mui/material";

export const SelectedMovies= styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    minHeight: 'calc(100vh - 170px)',
    position: 'sticky',
    top: theme.spacing(2),
}));

export const SelectText = styled(Typography)(({ theme }) => ({
    textAlign: 'center'
}));