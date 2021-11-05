import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Rafael Gomes</Text>
        <Text color="gray.300" fontSize="small">
          rafael.gcaldas01@gmail.com
        </Text>
      </Box>

      <Avatar size="md" ml="4" name="Rafael Gomes" src="https://github.com/rafaelgcaldas.png" />
    </Flex>
  )
}