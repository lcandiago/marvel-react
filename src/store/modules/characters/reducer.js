import produce from 'immer';

export default function characters(state = [], action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return produce(state, (draft) => {
        const characterIndex = draft.findIndex(
          (c) => c.id === action.character.id,
        );

        if (characterIndex < 0) {
          draft.push(action.character);
        }
      });
    case 'REMOVE_CHARACTER':
      return produce(state, (draft) => {
        const characterIndex = draft.findIndex((c) => c.id === action.id);

        if (characterIndex >= 0) {
          draft.splice(characterIndex, 1);
        }
      });
    case 'EDIT_CHARACTER':
      return produce(state, (draft) => {
        const characterIndex = draft.findIndex((c) => c.id === action.infos.id);

        draft[characterIndex].name = action.infos.name;
        draft[characterIndex].description = action.infos.description;
      });
    default:
      return state;
  }
}
