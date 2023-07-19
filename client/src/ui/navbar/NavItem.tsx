import React from "react";
import { useTheme, Box } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  selected: string;
  callback: () => void;
  href: string;
  value: string;
};

const NavItem = ({ selected, callback, href, value }: Props) => {
  const { palette } = useTheme();
  return (
    <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
      <Link
        to={href}
        onClick={callback}
        style={{
          color: selected === value ? "inherit" : palette.grey[700],
          textDecoration: "inherit",
          textTransform: "capitalize",
        }}
      >
        {value}
      </Link>
    </Box>
  );
};

export default NavItem;
