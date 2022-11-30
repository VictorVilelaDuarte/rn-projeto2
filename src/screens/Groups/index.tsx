import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera do Ba",
    "Lagoinha",
    "Time da Kobe",
    "Grupo da familia",
    "TPM",
    "TVM",
    "Academia",
  ]);

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty message="Nenhum grupo encontrado" />}
      />
      <Button title="Criar nova turma" />
    </Container>
  );
}
