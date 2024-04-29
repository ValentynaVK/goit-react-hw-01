
import css from './FriendList.module.css'
import clsx from 'clsx'

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx(css.text, isOnline === true ? css.online : css.offline)}
      >
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  )
}