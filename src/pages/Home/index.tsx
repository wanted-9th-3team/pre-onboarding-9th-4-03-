import { Box, Center, Image, Text } from '@chakra-ui/react'
import TableView from '../../components/TableView'

function Home() {
  return (
    <div>
      <Box
        w="100%"
        h="calc(15vh - 20px)"
        padding="0 20px"
        display="flex"
        justifyContent="start"
      >
        <Box display="flex" alignItems="center">
          <Image
            boxSize="200px"
            src="data:image/jpeg;base64,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"
            alt="Dan Abramov"
          />
          <Text fontSize="5xl" as="b" ml="20px" mt="-10px" color="green">
            Trading Chart
          </Text>
        </Box>
      </Box>
      <Center w="100%">
        <TableView />
      </Center>
    </div>
  )
}
export default Home
