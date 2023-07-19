import React, { useState } from "react";
import { useTheme, Typography } from "@mui/material/";
import PixIcon from "@mui/icons-material/Pix";
import { FlexBetween } from "@/components/FlexBetween";
import NavItem from "@/ui/navbar/NavItem";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0" color={palette.grey[300]}>
      {/*    left nav */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finace
        </Typography>
      </FlexBetween>

      {/*    right nav */}
      <FlexBetween gap="2rem">
        <NavItem
          callback={() => setSelected("dashboard")}
          href="/"
          selected={selected}
          value="dashboard"
        />
        <NavItem
          callback={() => setSelected("predictions")}
          href="/predictions"
          selected={selected}
          value="predictions"
        />
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
