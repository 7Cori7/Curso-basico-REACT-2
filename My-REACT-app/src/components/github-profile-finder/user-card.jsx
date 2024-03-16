

export default function UserCard({user}){

    const {avatar_url, name, login, followers, following, public_repos, created_at} = user;

    const date = new Date(created_at);

    return <div className="github-user">

        <div>
            <img src={avatar_url} alt={name} className="avatar" />
        </div>

        <div className="user-main-container">

            <a href={`https://github.com/${login}`} target="_blank">{name || login}</a>

            {/* <p>User joined on {`${date.getDate()} ${date.toLocaleDateString('en-us', {month: 'short'})} ${date.getFullYear()}`}</p> */}
            <p>{
                date.getDate() === '1' || date.getDate() === '2'
                ? `User joined on the ${date.getDate()} of ${date.toLocaleDateString('en-us', {month: 'short'})} ${date.getFullYear()}`
                :`User joined on the ${date.getDate()}th of ${date.toLocaleDateString('en-us', {month: 'short'})} ${date.getFullYear()}`
                }
            </p>
        </div>
        
        <div className="user-data">
            <div className="user-data-row">
                <p>Repositories:</p>
                <span>{public_repos}</span>
            </div>
            <div className="user-data-row">
                <p>Followers:</p>
                <span>{followers}</span>
            </div>
            <div className="user-data-row">
                <p>Following:</p>
                <span>{following}</span>
            </div>
        </div>
    </div>
}