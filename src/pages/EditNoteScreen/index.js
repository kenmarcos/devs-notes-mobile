import { useEffect, useLayoutEffect, useState } from "react";
import * as Styled from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Alert, View } from "react-native";

const EditNoteScreen = () => {
  const [status, setStatus] = useState("createNote");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const route = useRoute();

  const navigation = useNavigation();

  const notes = useSelector((store) => store.notes.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      route.params?.noteIndex !== undefined &&
      notes[route.params.noteIndex]
    ) {
      setStatus("editNote");
      setTitle(notes[route.params.noteIndex].title);
      setBody(notes[route.params.noteIndex].body);
    }
  }, []);

  const handleSaveNote = () => {
    if (title === "" || body === "") {
      return Alert.alert("Atenção", "Preencha todos os campos");
    }

    if (status === "createNote") {
      dispatch({
        type: "ADD_NOTE",
        payload: {
          title,
          body,
        },
      });

      Alert.alert("Anotação criada com sucesso!");
    }

    if (status === "editNote") {
      dispatch({
        type: "EDIT_NOTE",
        payload: {
          noteIndex: route.params.noteIndex,
          title,
          body,
        },
      });

      alert("Anotação atualizada com sucesso!");
    }

    navigation.goBack();
  };

  const handleCloseScreen = () => {
    navigation.goBack();
  };

  const handleDeleteNote = () => {
    Alert.alert(
      "Excluir anotação",
      "Tem certeza que deseja excluir esta anotação?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: () => {
            dispatch({
              type: "DELETE_NOTE",
              payload: {
                noteIndex: route.params.noteIndex,
              },
            });

            Alert.alert("Anotação excluída com sucesso!");
            navigation.goBack();
          },
        },
      ]
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === "createNote" ? "Nova anotação" : "Editar anotação",
      headerRight: () => (
        <Styled.ButtonZone>
          <Styled.SaveNoteButton onPress={handleSaveNote}>
            <Styled.SaveNoteButtonImage
              source={require("../../assets/save.png")}
            />
          </Styled.SaveNoteButton>

          <Styled.CloseButton onPress={handleCloseScreen}>
            <Styled.CloseButtonImage
              source={require("../../assets/close.png")}
            />
          </Styled.CloseButton>
        </Styled.ButtonZone>
      ),
      headerLeft: () => null,
    });
  }, [status, title, body]);

  return (
    <Styled.Container>
      <Styled.TitleInput
        placeholder="Título da anotação"
        placeholderTextColor="#CCC"
        autoFocus
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Styled.BodyInput
        multiline
        textAlignVertical="top"
        placeholder="Digite sua anotação"
        placeholderTextColor="#CCC"
        value={body}
        onChangeText={(text) => setBody(text)}
      />

      {status === "editNote" && (
        <Styled.DeleteNoteButton
          onPress={handleDeleteNote}
          title="Excluir"
          color={"#ff3333"}
        />
      )}
    </Styled.Container>
  );
};

export default EditNoteScreen;
