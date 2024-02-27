import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const TitleInput = styled.TextInput`
  padding: 16px;
  color: #fff;
  font-size: 20px;
`;

export const BodyInput = styled.TextInput`
  flex: 1;
  padding: 16px;
  color: #fff;
  font-size: 16px;
`;

export const ButtonZone = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 16px;
  gap: 24px;
`;

export const SaveNoteButton = styled.TouchableOpacity``;

export const SaveNoteButtonImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseButtonImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const DeleteNoteButton = styled.Button``;
