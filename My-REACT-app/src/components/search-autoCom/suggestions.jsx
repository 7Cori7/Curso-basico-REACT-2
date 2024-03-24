

export default function Suggestions({filteredUsers, handleClick}){

    return <div className="dropDown">
            <ul>
                {
                    filteredUsers && filteredUsers.length
                    ? filteredUsers.map((item, index) => <li key={index} onClick={handleClick}>{item}</li>)
                    : null
                }
            </ul>
        </div>
}