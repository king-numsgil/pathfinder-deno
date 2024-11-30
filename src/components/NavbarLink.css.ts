import { style } from "@vanilla-extract/css";
import { vars } from "@/theme/index.ts";

export const root = style({
    selectors: {
        "&.active": {
            backgroundColor: vars.colors.green[8],
        },
        "&:hover": {
            backgroundColor: vars.colors.green[5],
            color: vars.colors.green[9],
        }
    },

    color: vars.colors.green[2],
    fontWeight: "bold",
    transition: "all 0.2s ease-in-out",
});
