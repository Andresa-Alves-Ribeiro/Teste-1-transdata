import Head from "next/head";
import { Container, Header, Input, Button, Grid, Message, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import { useState } from "react";
import 'semantic-ui-css/semantic.min.css';

type Notas = { [key: number]: number };

export default function Home() {
  const [valor, setValor] = useState('');
  const [notas, setNotas] = useState<Notas | null>(null);
  const [erro, setErro] = useState('');

  const calcularNotas = () => {
    const valorConvertido = parseInt(valor, 10);

    if (isNaN(valorConvertido) || valorConvertido <= 0) {
      setErro("Por favor, insira um valor válido maior que zero.");
      setNotas(null);
      return;
    }

    setErro('');
    let valorRestante = valorConvertido;
    const notasDisponiveis = [20, 10, 5, 1];
    const resultado: Notas = {};

    notasDisponiveis.forEach(nota => {
      resultado[nota] = Math.floor(valorRestante / nota);
      valorRestante %= nota;
    });

    setNotas(resultado);
  };

  return (
    <div className="teste">
      <Head>
        <title>Caixa Eletrônico</title>
        <meta name="description" content="Criado por Andresa A Ribeiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header as="h1" textAlign="center" style={{ marginBottom: '1em' }}>
          Caixa Eletrônico
        </Header>

        <Grid centered>
          <Grid.Row>
            <Input
              type="text"
              value={valor}
              onChange={(e) => setValor(e.target.value.replace(/\D/g, ''))}
              placeholder="Digite o valor"
              action
            >
              <input />
              <Button color="blue" onClick={calcularNotas}>
                Calcular Notas
              </Button>
            </Input>
          </Grid.Row>

          {erro && (
            <Grid.Row>
              <Message negative>
                <Message.Header>Erro</Message.Header>
                <p>{erro}</p>
              </Message>
            </Grid.Row>
          )}

          {notas && (
            <Table celled structured>
              <TableHeader>
              <TableRow>
                  <TableHeaderCell colSpan='4' textAlign="center">Quantidade de Notas:</TableHeaderCell>
                </TableRow>
                <TableRow>
                  {Object.keys(notas).map((nota) => (
                    <TableHeaderCell key={nota}>Notas de {nota}</TableHeaderCell>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  {Object.values(notas).map((qtd, index) => (
                    <TableCell key={index}>{qtd}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          )}
        </Grid>
      </Container>
    </div>
  );
}