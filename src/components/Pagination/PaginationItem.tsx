import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  isCurrentPage?: boolean;
  pageNumber: number;
}

export function PaginationItem({ isCurrentPage = false, pageNumber }: PaginationItemProps) {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"        
      _hover={{
        bg: 'gray.500'
      }}
    >
      {pageNumber}
    </Button>
  )
}