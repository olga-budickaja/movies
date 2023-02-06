import { Box, Modal, Typography } from "@mui/material";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { Close, ContentCopy, Visibility } from "@mui/icons-material";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from "react";
import { InputFormConfirmModal, style, TitleContainer } from "./css";
import { Link as RouterLink } from "react-router-dom";
import { ShareIcon } from "../../components";
import { CONFIRM_MODULE_TIMEOUT } from "../../const";
import { FormattedMessage } from "react-intl";


const ConfirmModal = ({ open, url, title, onClose, urlShare }) => {
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        let timer;
        if (openAlert) {
            timer = setTimeout(() => setOpenAlert(false), CONFIRM_MODULE_TIMEOUT);
        }

        return () => clearTimeout(timer)
    }, [openAlert]);



    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TitleContainer>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <ShareIcon title={title} url={urlShare} />
                </TitleContainer>
                <InputFormConfirmModal
                    component="form"
                >
                    <InputBase
                        sx={{ pl: 1, flex: 1 }}
                        placeholder="List URL"
                        inputProps={{ 'aria-label': 'list URL' }}
                        value={urlShare}
                    />
                    <IconButton
                        sx={{ p: '10px' }}
                        aria-label="preview"
                        component={RouterLink}
                        target="_blank"
                        to={url}

                    >
                        <Visibility />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <CopyToClipboard
                        text={urlShare}
                        onCopy={() => setOpenAlert(true)}
                    >
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="copy to clipboard">
                            <ContentCopy />
                        </IconButton>
                    </CopyToClipboard>
                </InputFormConfirmModal>

                {openAlert
                    ? (
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpenAlert(false);
                                    }}
                                >
                                    <Close fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            <FormattedMessage id="selected.modal.copy" />
                        </Alert>
                    )
                    : null}
            </Box>
        </Modal>
    );
};

ConfirmModal.propTypes = {
    open: PropTypes.bool,
    url: PropTypes.string,
    title: PropTypes.string,
    onClose: PropTypes.func,
    onNavigate: PropTypes.func
}

export default ConfirmModal;