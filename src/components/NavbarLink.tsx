import { NavLink, type LinkProps } from "react-router-dom";
import { Button } from "@mantine/core";

// @ts-types="@types/react"
import type { FC, PropsWithChildren } from "react";

export type NavbarLinkProps = PropsWithChildren<LinkProps>;

export const NavbarLink: FC<NavbarLinkProps> = ({ children, ...props }) => {
    return (
        <Button
            renderRoot={({ className, ...others }) => (
                <NavLink
                    className={(_props) => className}
                    {...props}
                    {...others}
                />
            )}
        >
            {children}
        </Button>
    );
};
