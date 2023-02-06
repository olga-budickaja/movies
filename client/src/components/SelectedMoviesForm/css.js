import { styled, Typography } from "@mui/material";

export const ErrorText = styled(Typography)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '7px'
}));