import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {MatchContext} from "../../context/MatchContext";

const Matches = () => {
    const matches = useContext(MatchContext)
    return (
        <ul>
            <div className="listed-matches">
                {matches.map((m) => {
                    return <li style={{padding: '5px'}} key={m.match_id}> {m.radiant_name}
                        <span> vs. </span> {m.dire_name}
                        <br/>
                        | <Link to={"/match/" + m.match_id} key={m.match_id}> {m.match_id} </Link> |
                    </li>
                })}
            </div>
        </ul>
    )
}

export default Matches;