import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function MatchDetail() {
  const [match, setMatch] = useState(null);
  const [heroes, setHeroes] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const url = " https://api.opendota.com/api/matches/";
    console.log("Fetching " + id + "match");
    axios
      .get(url + id)
      .then((res) => {
        console.log(res.data.picks_bans);
        setHeroes(res.data.picks_bans);
        setMatch(res.data);
      })
      .catch((reason) => console.log(reason));
  }, [id]);

  let content = "";
  let radiant = [];
  let dire = [];

  function checkWinner() {
    let victoryStatus = "";

    if (match.radiant_win) {
      victoryStatus = " Radiant Victory ";
    } else {
      victoryStatus = " Dire Victory ";
    }
    return victoryStatus;
  }

  function selectHeroes() {
    {
      heroes.map((h) => {
        if (h.is_pick && h.team === 0) {
          radiant.push(h.hero_id + " ");
          return radiant;
        } else if (h.is_pick && h.team === 1) {
          dire.push(h.hero_id + " ");
          return dire;
        }
      });
    }
  }

  selectHeroes();

  if (match) {
    content = (
      <div>
        <span style={{ color: "gold" }} className="winner">
          {checkWinner()}
          <br /> {parseInt(match.duration / 60)} minutes
        </span>
        <div className="team-container">
          <div className="radiant">
            <div className="radiant-header">
              {<img src={match.radiant_team.logo_url} alt="" />}
              <p>{match.radiant_team.name}</p>
            </div>
            <div className="radiant-body">
              <p style={{ color: "lightGray" }}>
                {" "}
                Score: {match.radiant_score}
              </p>
            </div>
          </div>
          <div className="line" />
          <div className="dire">
            <div className="dire-header">
              <p>{match.dire_team.name}</p>
              {<img src={match.dire_team.logo_url} alt="" />}
            </div>
            <div className="dire-body">
              <p style={{ color: "lightGray" }}> Score: {match.dire_score}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="match-container">{content}</div>;
}

export default MatchDetail;
