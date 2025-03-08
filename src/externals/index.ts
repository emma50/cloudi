import { animated } from '@react-spring/web'
import { Text, Box, Flex, Stack, AccordionRoot, Card, Grid } from '@chakra-ui/react'
 
export const Animated = {
  Box: animated(Box),
  Text: animated(Text),
  Flex: animated(Flex),
  Stack: animated(Stack),
  AccordionRoot: animated(AccordionRoot),
  CardRoot: animated(Card.Root),
  Grid: animated(Grid),
}