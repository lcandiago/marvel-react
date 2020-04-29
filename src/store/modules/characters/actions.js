export function addCharacter(character) {
  return { type: 'ADD_CHARACTER', character };
}

export function removeCharacter(id) {
  return { type: 'REMOVE_CHARACTER', id };
}

export function editCharacter(infos) {
  return { type: 'EDIT_CHARACTER', infos };
}
