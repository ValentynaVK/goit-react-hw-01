import css from './Profile.module.css'
export default function Profile({
   name, tag, location,image,stats,
    
}){
    return (
        <div className={css.profcontainer}>
  <div className={css.photocontainer}>
    <img className={css.photo}
      src={image}
      alt="User avatar"
    />
    <p className={css.proftext}>{name}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.proflistcontainer}>
    <li className={css.profitem}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.profitem}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.profitem}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}