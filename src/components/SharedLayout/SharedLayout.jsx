import { FcFilmReel, FcHome } from 'react-icons/fc';
import { Outlet } from 'react-router-dom';
import { Box, Header, StyledLink } from './SharedLayout.styled';
import { Suspense } from 'react';

const navItems = [
    {href: 'home', text: 'Home', icon: FcHome},
    {href: 'movies', text: 'Movies', icon: FcFilmReel}
]

export const SharedLayout = () => {
    return (
        <Box>
            <Header>
                <nav>
                   {navItems.map(({href, text, icon: Icon}) => {
                    return (
                        <StyledLink to={href} key={href}>
                            <Icon style={{marginRight: "10px"}
                            } size='30'/>
                            {text}
                        </StyledLink>
                    )
                   })}
                </nav>
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
            </Suspense>
        </Box>
    )
}