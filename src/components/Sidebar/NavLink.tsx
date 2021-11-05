import { ElementType } from "react"

import { Text, Link, Icon } from "@chakra-ui/react"

interface NavLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children }: NavLinkProps) {
  return (
    <Link display="flex" align="center" >
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}