import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import * as Styled from "./styles";
import { useSelector } from "react-redux";
import { NoteItem } from "../../components/NoteItem";

const ListScreen = () => {
  const navigation = useNavigation();

  const notes = useSelector((store) => store.notes.list);

  const handleAddNote = () => {
    navigation.navigate("EditNote");
  };

  const handleNoteItemPress = (index) => {
    navigation.navigate("EditNote", {
      noteIndex: index,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Minhas anotações",
      headerRight: () => (
        <Styled.AddNoteButton onPress={handleAddNote}>
          <Styled.AddNoteButtonImage
            source={require("../../assets/more.png")}
          />
        </Styled.AddNoteButton>
      ),
    });
  }, []);

  return (
    <Styled.Container>
      {notes.length > 0 && (
        <Styled.NotesList
          data={notes}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <NoteItem
              data={item}
              title={item.title}
              onPress={() => handleNoteItemPress(index)}
            />
          )}
        />
      )}

      {notes.length === 0 && (
        <Styled.EmptyNotesList>
          <Styled.EmptyNotesImage source={require("../../assets/note.png")} />
          <Styled.EmptyNotesText>Nenhuma anotação</Styled.EmptyNotesText>
        </Styled.EmptyNotesList>
      )}
    </Styled.Container>
  );
};

export default ListScreen;
