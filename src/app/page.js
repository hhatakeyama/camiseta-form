'use client'

import { Box, Container, Stack, Title } from "@mantine/core"
import React from "react"

import * as Form from "@/components/forms"

export default function Home() {
  return (
    <Container h="100%">
      <Stack align="center" justify="center" h="100%">
        <Title order={2} ta="center">Olá 😉 Quanta curiosidade hein?!</Title>
        <Box h="300px">
          <Form.Perguntas />
        </Box>
      </Stack>
    </Container>
  )
}
