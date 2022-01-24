import useGitConnected from "../../hooks/useGitConnected";
import { Heading, Link, Text } from 'theme-ui';

const GitConnectedProjects = ({data}) => {
    console.log(data.projects)
    return (
        data.projects.map((project) => (
            <>
                <Heading as='h2' sx={{fontFamily: 'heading'}}>
                    <Link href={project.repositoryUrl} sx={{textDecoration: 'none'}}>{project.name}</Link>
                </Heading>
                <Text sx={{fontWeight: 'bold', display: 'block'}}>{project.primaryLanguage}</Text>
                <Text>{project.summary}</Text>
                <br />
                <br />
            </>
        ))
    )
}

const Projects = () => {

    const [gitConnected, isGitLoading] = useGitConnected();


    return isGitLoading ? <p>Loading...</p> : <GitConnectedProjects data={gitConnected} />;
}

export default Projects;