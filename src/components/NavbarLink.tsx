import { type NavigateOptions, NavLink as RouterNavLink } from "react-router-dom";
import { NavLink, type NavLinkProps } from "@mantine/core";

// @ts-types="@types/react"
import type { FC, ReactNode } from "react";

import { root } from "@/components/NavbarLink.css.ts";

type RouterNavLinkBaseProps = {
    label: ReactNode;
    description?: ReactNode;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    disabled?: boolean;
    defaultOpened?: boolean;
    onClick?: NavLinkProps["onClick"];
};

type RouterNavLinkConditionalProps =
    | {
        children?: ReactNode;
        to?: never;
    }
    | {
        children?: never;
        to?: string | {
            to: string;
            options?: NavigateOptions;
        };
    };

type NavbarLinkProps = RouterNavLinkBaseProps & RouterNavLinkConditionalProps;

export const NavbarLink: FC<NavbarLinkProps> = (
    { defaultOpened, children, to, ...props },
) => {
    return (
        <NavLink
            renderRoot={to === undefined ? undefined : ({ className, ...others }) => (
                <RouterNavLink
                    className={({ isActive }) => className + (isActive ? " active" : "")}
                    to={typeof to === "string" ? to : to.to}
                    {...(typeof to !== "string" && to.options !== undefined ? to.options : {})}
                    {...others}
                />
            )}
            classNames={{
                root,
            }}
            defaultOpened={defaultOpened ?? true}
            childrenOffset={children === undefined ? undefined : 28}
            onClick={() => console.log("Hello!")}
            {...props}
        >
            {children}
        </NavLink>
    );
};
