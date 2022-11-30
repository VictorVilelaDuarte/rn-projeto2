import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />

      <GroupCard title="Galera do Ba" />
    </Container>
  );
}
