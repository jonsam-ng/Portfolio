import { qwikify$ } from "@builder.io/qwik-react";
import { Button, Slider, Avatar, Badge } from "@mui/material";

export const MUIButton = qwikify$(Button);
export const MUISlider = qwikify$(Slider, { eagerness: "hover" });
export const MUIAvatar = qwikify$(Avatar);
export const MUIBadge = qwikify$(Badge);
