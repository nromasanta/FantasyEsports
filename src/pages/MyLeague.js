import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

const MyLeague = () => {

    
    const {data : leagues, isPending, error } = useFetch('http://localhost:8000/leagues');
    const {id} = useParams();

    // Breakdown of this line:
    // If league is not null, THEN
    // Use .find() to go through the leagues array, which was gathered into the 
    // leagues object from the useFetch(),
    // then, take an element from the array and assign it an id
    // Convert the id we took from the useParams() and turn it into an integer
    // to match against the element.id,
    // THEN, if there's a hit, set the variable "league" (NOT to be confused with leagues)
    // with the array entry we found in the database.
    // Now we can use it later by specifying league.title, or even league.id, or other
    // information we got from that array object. 
    const league = leagues && leagues.find(element => element.id === parseInt(id));

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error} </div>;

    return ( 
        <div>
                {league && <h2> League Details - {league.title} - {id} </h2>}
        </div>
     );
}
 
export default MyLeague;
