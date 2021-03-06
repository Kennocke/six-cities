import { Comment as CommentType } from '../../types/comment';

type CommentProps = {
  comment: CommentType;
};

function Review({ comment }: CommentProps) {
  const rating = `${comment.rating * 20}%`;

  const date = new Date(comment.date);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const formattedDate = `${month} ${year}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>

      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: rating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={comment.date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}

export default Review;
