import { Button, Radio, Stack, Text, TextInput } from '@mantine/core'
import React, { useState } from 'react'

export default function Perguntas() {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [generoErrado, setGeneroErrado] = useState(false)
  const [respostaNegativa, setRespostaNegativa] = useState(false)
  const [respostaPositiva, setRespostaPositiva] = useState(false)
  const [values, setValues] = useState({
    genero: '',
    nome: '',
    estadoCivil: '',
  })

  const etapas = [
    {
      id: "genero",
      label: "Me fala mais sobre você. Você é:",
      formType: 'radio',
      values: [
        { label: "Homem", value: "homem" },
        { label: "Mulher", value: "mulher" },
        { label: "Outros 👀", value: "outros" },
      ],
      checkResposta: option => {
        if (option === "mulher") {
          setValues(prevState => ({ ...prevState, genero: option }))
          setEtapaAtual(1)
        }
        else setGeneroErrado(true)
      },
    },
    {
      id: "nome",
      label: <>Hmm muito bem 😁<br />E como você se chama?</>,
      formType: 'text',
      checkResposta: () => setEtapaAtual(2),
    },
    {
      id: "estadoCivil",
      label: `${values.nome}, me diz uma coisa, você é:`,
      formType: 'radio',
      values: [
        { label: "Solteira", value: "solteira" },
        { label: "Tenho alguém", value: "alguem" },
      ],
      checkResposta: option => {
        if (option === "solteira") {
          setValues(prevState => ({ ...prevState, estadoCivil: option }))
          setEtapaAtual(3)
        }
        else setRespostaNegativa(true)
      },
    },
    {
      id: "conhecer",
      label: `${values.nome}, já que você está solteira, será que a gente pode se conhecer?`,
      formType: 'radio',
      values: [
        { label: "Sim, claro, certamente.", value: "sim" },
        { label: "Melhor não. Vim aqui só de curiosa.", value: "nao" },
      ],
      checkResposta: option => {
        if (option === "sim") {
          setValues(prevState => ({ ...prevState, conhecer: option }))
          setRespostaPositiva(true)
          setEtapaAtual(0)
        }
        else setRespostaNegativa(true)
      },
    },
  ]

  return (
    <Stack align="center" justify="center">
      {!generoErrado && !respostaNegativa && !respostaPositiva && etapas[etapaAtual] && (
        <>
          <Text ta="center" size="xl">{etapas[etapaAtual].label}</Text>
          {etapas[etapaAtual].formType === "text" ? (
            <>
              <TextInput value={values[etapas[etapaAtual].id]} onChange={(e) => setValues(prevState => ({ ...prevState, nome: e.target.value }))} />
              {values[etapas[etapaAtual].id] && <Button onClick={() => etapas[etapaAtual].checkResposta()}>Enviar</Button>}
            </>
          ) : null}
          {etapas[etapaAtual].formType === "radio" ? (
            <Radio.Group
              value={values[etapas[etapaAtual].id]}
              onChange={option => {
                setValues(prevState => ({ ...prevState, [etapas[etapaAtual].id]: option }))
              }}
              name={etapas[etapaAtual].id}
              withAsterisk>
              <Stack>
                {etapas[etapaAtual].values.map(resposta => (
                  <Button key={resposta.value} onClick={() => etapas[etapaAtual].checkResposta(resposta.value)}>
                    {resposta.label}
                  </Button>
                ))}
              </Stack>
            </Radio.Group>
          ) : null}
        </>
      )}
      {generoErrado && (
        <Text ta="center" size="xl">Ocorreu um erro. Tente novamente em 5 bilhões de anos.</Text>
      )}
      {respostaNegativa && (
        <Text ta="center" size="xl">Foi legal ter você até aqui 😉</Text>
      )}
      {respostaPositiva && (
        <Text ta="center" size="xl">
          Me chama no WhatsApp.<br />
          Me chamo Rodrigo e meu número é o (17) 99274-2993
        </Text>
      )}
    </Stack>
  )
}
