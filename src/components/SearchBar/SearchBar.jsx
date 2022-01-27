import { Text, Input, Label, Select, Grid, Box } from "theme-ui";

const SearchBar = ({setSortBy, setSearchQuery, totalBlogs}) => {
    return (
        <>
        <Grid columns= {[2, '1fr 1fr 1fr']}>
            <Box>
                <Label>Search</Label>
                <Input onChange={(e) => setSearchQuery(e.target.value)}/>
            </Box>
            <Box>
                <Label>Sort</Label>
                <Select defaultValue="Most recent first" onChange={(e) => setSortBy(e.target.value)}>
                    <option>Most recent first</option>
                    <option>Oldest first</option>
                    <option>A - Z</option>
                    <option>Z - A</option>
                </Select>
            </Box>
            
        </Grid>
        <br />
        <Text sx={{fontWeight: 'bold'}}>Showing {totalBlogs} results</Text>
        <br />
        <br />
        </>
    );
}

export default SearchBar;