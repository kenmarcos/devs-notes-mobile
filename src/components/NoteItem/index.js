import * as Styled from "./styles";

export const NoteItem = ({ data, title, onPress }) => {
  return (
    <Styled.Container onPress={onPress}>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
