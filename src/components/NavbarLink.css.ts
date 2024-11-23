import { style } from "@vanilla-extract/css";
import { vars } from "@/theme/index.ts";

export const root = style({
    selectors: {
        "&.active": {
            textDecoration: "underline",
        }
    },

    color: vars.colors.green[2],
});
