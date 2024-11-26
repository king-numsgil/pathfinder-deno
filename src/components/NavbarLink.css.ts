import { style } from "@vanilla-extract/css";
import { vars } from "@/theme/index.ts";

export const root = style({
    selectors: {
        "&.active": {
            backgroundColor: vars.colors.green[9],
        },
        "&:hover": {
            backgroundColor: vars.colors.green[7],
        }
    },

    color: vars.colors.green[2],
    transition: "all 0.2s ease-in-out",
});
