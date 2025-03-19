import { 
  CloseButton, 
  Dialog, 
  Portal, 
  Flex,
  Image,
  Box, 
} from "@chakra-ui/react"
import { HeaderButtons, MenuLinks } from "../common/customMenu"
import { IoMenuOutline } from "react-icons/io5";

const CustomDialogModal = () => {
  return (
    <Dialog.Root size="full" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        {/* Open Dialog */}
        <Box display={{base: "flex", lg: "none"}}>
          <IoMenuOutline color="#005EDF" size="2rem" />
        </Box>
      </Dialog.Trigger>
      {/* children */}
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Flex w="100%" justifyContent="space-between">
              <Dialog.CloseTrigger asChild>
                <CloseButton size="2xl" color="#005EDF" />
              </Dialog.CloseTrigger>
              <Image src="/images/cloudi.png" h="50px" w="50px" pr="1rem" pt="1rem"/>
              {/* <Dialog.Header>
                <Dialog.Title></Dialog.Title>
              </Dialog.Header> */}
            </Flex>
            <Dialog.Body display="flex" flexDirection="column" alignItems="center">
              {/* alignContent="space-between" */}
               {/* Body  */}
               <MenuLinks />
               <HeaderButtons />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default CustomDialogModal
