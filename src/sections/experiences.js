import React from "react";
import "./experience.css";
import Exp from "../components/exp_comp";
import axios from "axios";

export default function Experiences() {
  const [exper, setExper] = React.useState(null);
  async function fetchData() {
    const res = await axios.get(
      "https://api.airtable.com/v0/apptiMTtiQUXJWj3u/experiences",
      {
        headers: {
          authorization: `Bearer patZ9dWK54UumkS3F.3696ce4c9b494d0eb24101532b5c847c586affba641931ed9e6ba448e9f784a9`,
        },
      }
    );
    console.log("logging res data");
    console.log(res.data);
    console.log("logging res data records");
    console.log(res.data.records);
    setExper(res.data.records);
    console.log("logging exper");
    console.log(exper);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!exper) {
    return <div>Loading...</div>;
  }

  var size = 0;
  for (var elem in exper) {
    size += 1;
  }

  console.log("size", size);

  const mid = exper.length / 2;
  const first_half = exper.slice(0, mid);
  const sec_half = exper.slice(mid, exper.length);
  console.log("first half", first_half);
  console.log("second hald", sec_half);

  return (
    <div className="experiences-section">
      <h1 id="myexp">my experiences</h1>
      <div className="experiences-boxes">
        <br></br>
        <div className="experiences-container-first">
          {first_half.map((record) => (
            <div className="an_exp">
              <Exp key={record.id} props={record.fields} />
            </div>
          ))}
        </div>
        <div className="experiences-container-second">
          {sec_half.map((record) => (
            <div className="an_exp">
              <Exp key={record.id} props={record.fields} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function Experience(){
//     return(
//     <div className="experiences-section">

//     <h1 id="myexp">my experiences</h1>
//     <Exp position="software developer at codebase" date="september 2022-present"  />
//     <Exp position="software engineer intern at wayu health" date="august-october 2021"  />
//     <Exp position="president of interact club at delhi public school, vasant kunj" date="march 2021-april 2021"  />
//     <Exp position="founder, lead editor of environmental magazine at delhi public school, vasant kunj" date="march 2020-april 2022"  />
//     </div>
//     )
// }
