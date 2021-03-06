import useGitConnected from "../../hooks/useGitConnected";
import { Heading, Text, Box, Divider } from 'theme-ui';
import yearsElapsed from "../../utils/yearsElapsed";

const GitConnectedCreds = ({data}) => (
    <>
        <Heading as='h2' sx={{fontFamily: 'heading'}}>
            Experience
        </Heading>
        <Divider />
        {data.work.map((work) => (
            <Box sx={{paddingBottom: '10px'}}>
                <Heading as='h3' sx={{fontFamily: 'heading'}}>
                    {work.name}
                </Heading>
                <Text sx={{display: 'block'}}>{work.location}</Text>
                <Text sx={{display: 'block'}}>{work.position}</Text>
                <Text sx={{display: 'block'}}>{yearsElapsed(work.startDate)} years</Text>
            </Box>
        ))}

        <Heading as='h2' sx={{fontFamily: 'heading'}}>
            Education
        </Heading>
        <Divider />
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
        <Divider />
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
)

const Credentials = () => {
    const [gitConnected, isGitLoading] = useGitConnected();
    return isGitLoading ? <p>Loading...</p> : <GitConnectedCreds data={gitConnected} />;
}

export default Credentials;