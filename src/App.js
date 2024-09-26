import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 600px;
  margin: 20px auto;
  padding: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex-basis: 30%;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Position = styled.p`
  font-size: 14px;
  margin: 0;
  color: #666;
`;

const Icons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Icon = styled.span`
  cursor: pointer;
  font-size: 24px;
`;

const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    flex-basis: 100%;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableData = styled.td`
  padding: 10px;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

function TaskCard() {
  const tasks = [
    { id: 1, name: "Revisar relatório", completed: true },
    { id: 2, name: "Preparar apresentação", completed: false },
    { id: 3, name: "Atualizar sistema", completed: false },
  ];

  return (
    <Card>
      <Section>
        <Avatar src="https://via.placeholder.com/100" alt="Employee" />
      </Section>
      <Section>
        <Info>
          <Name>João Silva</Name>
          <Position>Desenvolvedor Frontend</Position>
        </Info>
      </Section>
      <Section>
        <Icons>
          <Icon>✏️</Icon>
          <Icon>❌</Icon>
        </Icons>
      </Section>
      <TaskTable>
        <thead>
          <tr>
            <TableHeader>Concluída</TableHeader>
            <TableHeader>Tarefa</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableData>
                <Checkbox type="checkbox" checked={task.completed} readOnly />
              </TableData>
              <TableData>{task.name}</TableData>
            </TableRow>
          ))}
        </tbody>
      </TaskTable>
    </Card>
  );
}

export default TaskCard;
