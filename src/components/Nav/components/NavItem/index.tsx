import { Button, Menu, MenuItem } from "@mui/material"
import { FC, useState } from "react";

type Props = {
    text: string
    options: []
}

const NavItem: FC<Props> = ({ text, options }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    

    return(
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {text}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>D 1 - {text}</MenuItem>
                <MenuItem onClick={handleClose}>D 2</MenuItem>
                <MenuItem onClick={handleClose}>D 3</MenuItem>
            </Menu>
        </>
    )


}

export { NavItem }