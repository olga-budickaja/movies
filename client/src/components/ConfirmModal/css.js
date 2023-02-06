import { Box, Paper, styled } from "@mui/material";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 250,
    bgcolor: 'background.paper',
    border: '1px solid grey',
    borderRadius: '7px',
    boxShadow: 24,
    p: 4,
};

export const InputFormConfirmModal = styled(Paper)(({ theme }) => ({
    p: '2px 4px',
    marginTop: '24px',
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 3px)',
    marginBottom: "14px"
}));
export const TitleContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));