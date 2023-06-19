import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  
  return(
    <Container>
      <Header />

      <main>
        <Content>      
          <ButtonText title='Excluir Nota' />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maiores, alias corporis harum id quasi possimus commodi
            reprehenderit autem aliquid ex quia reiciendis quis repellendus,
            vitae amet. Cupiditate ut eum neque!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maiores, alias corporis harum id quasi possimus commodi
            reprehenderit autem aliquid ex quia reiciendis quis repellendus,
            vitae amet. Cupiditate ut eum neque!
            Maiores, alias corporis harum id quasi possimus commodi
            reprehenderit autem aliquid ex quia reiciendis quis repellendus,
            vitae amet. Cupiditate ut eum neque!
          </p>

          <Section title='Links úteis'>
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='express' />
            <Tag title='nodejs' />
          </Section>

          <Button title='voltar'/>
        </Content>
      </main>

    </Container>
  )
}
