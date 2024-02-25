import styled from "styled-components/native";

export const AddNoteButton = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const AddNoteButtonImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Container = styled.View`
  background-color: #333;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NotesList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const EmptyNotesList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const EmptyNotesImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const EmptyNotesText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
