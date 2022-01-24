import { Heading, Text, Divider, Badge } from "theme-ui";
import useGitConnected from "../../hooks/useGitConnected";

const GitConnectedHome = ({data}) => {

    const splitSummary = data.basics.summary.split(/(Business Analysis:|Front-end:|Back-end:|Testing:|\n)/gm);
    const keywords = ["Business Analysis:", "Front-end:", "Back-end:", "Testing:"];

    return (
        <>
            <Heading as="h2">{data.basics.name}</Heading>
            <Text sx={{display: 'block'}}>{data.basics.locationAsString}</Text>
            <Text sx={{fontWeight: 'bold', display: 'block'}}>{data.basics.label}</Text>
            <Divider />
            {splitSummary.map((item) => (
                keywords.includes(item) ? <Text sx={{color: 'primary', fontWeight: 'bold'}}>{item}</Text> : <Text>{item}</Text>
            ))}
            <br />
            <br />
            {data.skills.map((skill) => (
                <Badge variant="accent" m={1} sx={{fontSize: '1'}}>{skill.name}</Badge>
            ))}
            
            

        </>
    );
}

const Home = () => {

    const [gitConnected, isGitLoading] = useGitConnected();


    return isGitLoading ? <p>Loading...</p> : <GitConnectedHome data={gitConnected} />;
}

export default Home;