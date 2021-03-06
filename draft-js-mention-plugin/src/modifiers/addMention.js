import { Modifier, EditorState, Entity } from 'draft-js';
import getSearchText from '../utils/getSearchText';

const addMention = (editorState, mention, selection) => {
  // TODO allow the user to override if the mentions are SEGMENTED, IMMUTABLE or MUTABLE
  const entityKey = Entity.create('mention', 'SEGMENTED', { mention });

  const { begin, end } = getSearchText(editorState, selection);

  // get selection of the @mention search text
  const mentionTextSelection = editorState.getSelection().merge({
    anchorOffset: begin,
    focusOffset: end,
  });

  let mentionReplacedContent = Modifier.replaceText(
    editorState.getCurrentContent(),
    mentionTextSelection,
    mention.get('name'),
    null, // no inline style needed
    entityKey
  );

  // If the mention is insert at the end a space is append right away for a smooth
  // writing experience.
  const blockKey = mentionTextSelection.getAnchorKey();
  const blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();
  if (blockSize === end) {
    mentionReplacedContent = Modifier.insertText(
      mentionReplacedContent,
      mentionReplacedContent.getSelectionAfter(),
      ' ',
    );
  }

  const newEditorState = EditorState.push(
    editorState,
    mentionReplacedContent,
    'insert-mention',
  );
  return EditorState.forceSelection(newEditorState, mentionReplacedContent.getSelectionAfter());
};

export default addMention;
