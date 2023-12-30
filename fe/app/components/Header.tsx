
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export const Header = () => {
    return (
        <Navbar className=''>
            <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">SUPER COOL DATA</p>
            </NavbarBrand>
            {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
            <NavbarContent justify="end">

                <NavbarItem>
                    <Link color="foreground" href="#create">
                        Create Data Object
                    </Link>
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    );
}