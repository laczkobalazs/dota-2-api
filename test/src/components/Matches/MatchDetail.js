import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';

function MatchDetail() {
    const [match, setMatch] = useState(null);
    const [heroes, setHeroes] = useState([]);

    let {id} = useParams();

    useEffect(() => {
        const url = " https://api.opendota.com/api/matches/"
        console.log("Fetching " + id + "match")
        axios.get(url + id)
            .then(res => {
                console.log(res.data.picks_bans)
                setHeroes(res.data.picks_bans)
                setMatch(res.data)
            })
            .catch(reason => console.log(reason))
    }, [id])

    let content = ""
    let radiant = []
    let dire = []

    function selectHeroes() {
        {
            heroes.map((h) => {
                if (h.is_pick && h.team === 0) {
                    radiant.push(h.hero_id + " ")
                    return radiant
                } else if (h.is_pick && h.team === 1) {
                    dire.push(h.hero_id + " ")
                    return dire
                }
            })
        }
    }

    selectHeroes()

    if (match) {
        content =
            <div className="team-container">
                <div className="radiant">
                    <div className="radiant-header">
                        {<img src={match.radiant_team.logo_url} alt=""/>}
                        <p>{match.radiant_team.name}</p>
                        {/*{radiant}*/}
                    </div>
                    <div className="radiant-body">
                        <div>{<img src={match.dire_team.logo_url} alt=""/>} <p>{dire[0]}</p></div>
                        {<img src={match.dire_team.logo_url} alt=""/>}
                        {<img src={match.dire_team.logo_url} alt=""/>}
                        {<img src={match.dire_team.logo_url} alt=""/>}
                        {<img src={match.dire_team.logo_url} alt=""/>}
                    </div>
                </div>
                <div className="line"/>
                <span className="versus"> vs </span>
                <div className="dire">
                    <div className="dire-header">
                        <p>{match.dire_team.name}</p>
                        {<img src={match.dire_team.logo_url} alt=""/>}
                        {/*{dire}*/}
                    </div>
                    <div className="dire-body">
                        {<img src={match.radiant_team.logo_url} alt=""/>}
                        {<img src={match.radiant_team.logo_url} alt=""/>}
                        {<img src={match.radiant_team.logo_url} alt=""/>}
                        {<img src={match.radiant_team.logo_url} alt=""/>}
                        {<img src={match.radiant_team.logo_url} alt=""/>}
                    </div>
                </div>
            </div>
    }

    return (
        <div className="match-container">
            {content}
        </div>
    )
}

export default MatchDetail;