import React from "react";
import "./experience.css"
import Exp from "../components/exp_comp"
import axios from "axios";

export default function Experiences() {
    const [exper, setExper] = React.useState(null);
    async function fetchData() {
      const res = await axios.get(
        "https://api.airtable.com/v0/apptiMTtiQUXJWj3u/experiences?maxRecords=4&view=Grid%20view",
        {
          headers: {
            authorization: `Bearer keygCE38KTOJi4jwr`,
          },
        }
      );
      console.log(res.data);
      setExper(res.data.records);
    }
  
    React.useEffect(() => {
      fetchData();
    }, []);
  
    if (!exper) {
      return <div>Loading...</div>;
    }

    return (
        <div className="experiences-section">
            <h1 id="myexp">my experiences</h1>
            {exper.map((record) => (
                <Exp key = {record.id} props={record.fields} />
            ))}
        </div>
    )
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
