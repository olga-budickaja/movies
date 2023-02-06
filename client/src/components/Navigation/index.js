import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
    Typography,
    Hidden, Button, Link
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { useCallback, useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom"
import { AppContext } from "../../context/appContext";
import { LOCALES } from "../../const";
import { FormattedMessage } from "react-intl";
import translate from "../../utils/translate";
const Navigation = () => {
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const { state, dispatch } = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, []);
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <Link
                            component={RouterLink}
                            to="settings"
                            sx={{ color: "grey", textDecoration: "none" }}
                        >
                            <ListItemText primary={translate('navigation.settings')} />
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Hidden only={['lg', 'xl']}>
                        <IconButton
                            onClick={() => setToggleDrawer(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                    <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ color: "white" }}>
                            <FormattedMessage id="navigation.title"/>
                        </Typography>
                    </Link>
                    <Box>
                        <IconButton
                            onClick={() => setLanguage(LOCALES.ENGLISH)}
                            disabled={state.locale === LOCALES.ENGLISH}
                            sx={{ my: 2, color: 'white' }}
                        >
                            en
                        </IconButton>
                        <IconButton
                            onClick={() => setLanguage(LOCALES.UKRAINIAN)}
                            disabled={state.locale === LOCALES.UKRAINIAN}
                            sx={{ my: 2, color: 'white' }}
                        >
                            uk
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        <Button
                            component={RouterLink}
                            to="settings"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <FormattedMessage id="navigation.settings"/>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </Box>
    );
}

export default Navigation;

