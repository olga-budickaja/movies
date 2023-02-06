import { Paper, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ReplyOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import {
    TelegramShareButton,
    TwitterShareButton,
    ViberShareButton,
    FacebookShareButton
} from "react-share";
import {
    ContainerButton,
    FacebookShare,
    IconContainer,
    TelegramShare,
    TwitterShare,
    ViberShare,
} from "./css";
import { ICON_MODULE_TIMEOUT } from "../../const";
import { FormattedMessage } from "react-intl";

const ShareIcon = ({url, title}) => {
    const [openIcon, setOpenIcon] = useState(false);

    useEffect(() => {
        let timer;
        if (openIcon) {
            timer = setTimeout(() => setOpenIcon(false), ICON_MODULE_TIMEOUT);
        }

        return () => clearTimeout(timer)
    }, [openIcon]);

    return (
        <>
            {openIcon && (
                <Paper sx={{ padding: "13px 20px 7px 20px", position: 'absolute', top: '-10px', left: '15px' }}>
                    <IconContainer>
                        <TelegramShareButton url={`${title}: ${url}`}><TelegramShare /></TelegramShareButton>
                        <FacebookShareButton url={`${title}: ${url}`}><FacebookShare /></FacebookShareButton>
                        <ViberShareButton url={`${title}: ${url}`}><ViberShare /></ViberShareButton>
                        <TwitterShareButton url={`${title}: ${url}`}><TwitterShare /></TwitterShareButton>
                    </IconContainer>
                </Paper>
            )}
            <ContainerButton>
                <IconButton onClick={() => setOpenIcon(!openIcon)}>
                    <ReplyOutlined/>
                </IconButton>
                <Typography variant="body2" component="div">
                    <FormattedMessage id="selected.modal.share"/>
                </Typography>
            </ContainerButton>

        </>

    );
};

export default ShareIcon;