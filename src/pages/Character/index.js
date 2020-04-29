import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as CharacterActions from '../../store/modules/characters/actions';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Series from '../../components/Series';

import { InfoSection, Description, TextArea, Image } from './styles';

const CharacterPage = () => {
  const { id: paramId } = useParams();
  const id = Number(paramId);

  const history = useHistory();

  const character = useSelector((state) =>
    state.characters.find((char) => char.id === id),
  );

  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);

  useEffect(() => {
    if (!character) {
      history.push('/');
    }
  }, [character, history]);

  function removeCharacter() {
    dispatch(CharacterActions.removeCharacter(id));
    history.push('/');
  }

  function toggleEdit() {
    const newMode = !editMode;
    setEditMode(newMode);

    if (newMode === false) {
      dispatch(CharacterActions.editCharacter({ id, name, description }));
    }
  }

  if (character) {
    return (
      <div>
        <Header>
          <Link to="/">Voltar</Link>
        </Header>

        {editMode ? (
          <input value={name} onChange={(e) => setName(e.target.value)} />
        ) : (
          <h1>{character.name}</h1>
        )}

        <InfoSection>
          <Description>
            <h2>Description</h2>
            {editMode ? (
              <TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            ) : (
              <p>{character.description}</p>
            )}

            <Button mTop={20} onClick={toggleEdit} fullWidth>
              {editMode ? 'Save' : 'Edit'}
            </Button>

            <Button mTop={20} onClick={removeCharacter} fullWidth>
              Remove from List
            </Button>
          </Description>

          <Image
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </InfoSection>

        <Series id={id} />
      </div>
    );
  }

  return null;
};

export default CharacterPage;
