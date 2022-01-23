import useGitConnected from "../../hooks/useGitConnected";
import { Heading, Text, Box } from 'theme-ui';

const GitConnectedAbout = ({data}) => {
    return (
        <>
            <Heading as='h2' sx={{fontFamily: 'heading'}}>
                Experience
            </Heading>
            <hr />
            {data.work.map((work) => (
                <Box sx={{paddingBottom: '10px'}}>
                    <Heading as='h3' sx={{fontFamily: 'heading'}}>
                        {work.name}
                    </Heading>
                    <Text sx={{display: 'block'}}>{work.location}</Text>
                    <Text sx={{display: 'block'}}>{work.position}</Text>
                </Box>
            ))}

            <Heading as='h2' sx={{fontFamily: 'heading'}}>
                Education
            </Heading>
            <hr />
            {data.education.map((school) => (
                <Box sx={{paddingBottom: '10px'}}>
                    <Heading as='h3' sx={{fontFamily: 'heading'}}>
                        {school.institution}
                    </Heading>
                    <Text sx={{display: 'block'}}>{school.area}</Text>
                    <Text sx={{display: 'block'}}>{school.studyType}</Text>
                    <Text sx={{display: 'block'}}>{school.score}</Text>
                </Box>
            ))}

            <Heading as='h2' sx={{fontFamily: 'heading'}}>
                Certificates and Awards
            </Heading>
            <hr />
            {data.awards.map((award) => (
                <Box sx={{paddingBottom: '10px'}}>
                    <Heading as='h3' sx={{fontFamily: 'heading'}}>
                        {award.title}
                    </Heading>
                    <Text sx={{display: 'block'}}>{award.awarder}</Text>
                    <Text sx={{display: 'block'}}>{award.date}</Text>
                </Box>
            ))}
        </>
    );

}

const Credentials = () => {

    const [gitConnected, isGitLoading] = useGitConnected();

    console.log(gitConnected);

    return isGitLoading ? <p>Loading...</p> : <GitConnectedAbout data={gitConnected} />;
}

export default Credentials;