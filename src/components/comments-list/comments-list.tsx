import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Comment from '../comment/comment';
import {
  Comment as CommentType,
  Comments as CommentsType
} from '../../types/comment';
import { store } from '../../store/index';
import { selectComments } from '../../store/room/selectors';
import { fetchCommentsAction } from '../../store/api-actions';

type CommentsListProps = {
  offerId: number;
};

function CommentsList({ offerId }: CommentsListProps) {
  const comments: CommentsType = useSelector(selectComments);

  useEffect(() => {
    store.dispatch(fetchCommentsAction(offerId));
  }, [offerId]);

  return (
    <>
      {comments.map((comment: CommentType) => (
        <Comment key={uuid()} comment={comment} />
      ))}
    </>
  );
}

export default CommentsList;
