import { Heading, Text, Divider, Badge, Link, Flex } from "theme-ui";
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
            <br />
            <br />
            <Heading as="h2">Profiles</Heading>
            <Flex as="nav">
                {data.basics.profiles.map((profile) => (
                    <Text pr={2} sx={{fontWeight: 'bold'}}>
                        <Link href={profile.url} sx={{textDecoration: 'none', color: 'primary'}}>{profile.network}</Link>
                    </Text>
                ))}
                <Text sx={{fontWeight: 'bold'}}>
                    <Link sx={{textDecoration: 'none', color: 'primary'}} href={`mailto:${data.basics.email}`}>{data.basics.email}</Link>
                </Text>
            </Flex>
        </>
    );
}

const Home = () => {

    const [gitConnected, isGitLoading] = useGitConnected();


    return isGitLoading ? <p>Loading...</p> : <GitConnectedHome data={gitConnected} />;
}

export default Home;