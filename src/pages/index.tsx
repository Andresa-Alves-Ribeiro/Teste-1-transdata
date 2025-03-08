import Head from "next/head";
import { Container, Header, Input, Button, Grid, Message, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import { useState } from "react";
import 'semantic-ui-css/semantic.min.css';

type Notas = { [key: number]: number };

export default function Home() {
  const [valor, setValor] = useState('0');
  const [notas, setNotas] = useState<Notas | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/^0+/, '') || '0';

    setValor(inputValue);
    setNotas(null);
  };

  const calcularNotas = () => {
    const valorConvertido = parseInt(valor, 10);

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
    <div className="componente-notas">
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
            <label htmlFor="valor">Valor a ser sacado:</label>
            <Input
              id="valor"
              type="number"
              min="1"
              value={valor}
              onChange={handleInputChange}
              placeholder="Digite o valor"
              action
            >
              <input />
              <Button color="blue" onClick={calcularNotas}>
                Calcular Notas
              </Button>
            </Input>
          </Grid.Row>

          {notas && (
            <Grid.Row>
              <Table celled structured>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell colSpan="4" textAlign="center">Quantidade de Notas</TableHeaderCell>
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
            </Grid.Row>

          )}

          {notas && (
            <Message info>
              <Message.Header>Resumo do Saque</Message.Header>
              <p>
                Você sacou <strong>R${valor}</strong> utilizando {" "}
                <strong>{Object.values(notas).reduce((a, b) => a + b, 0)}</strong> notas.
              </p>
            </Message>
          )}

        </Grid>
      </Container>
    </div>
  );
}