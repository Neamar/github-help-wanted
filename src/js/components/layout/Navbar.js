import React from 'react'
import Logo from './../../components/Logo'
import {
    Container,
    Menu,
    Icon,
    Dropdown
} from 'semantic-ui-react'
import {constants} from './../../constants'

const {links} = constants;

const Navbar = () => (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Logo size="large"/>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            fixed='right'
            as='a'
            href={links.internal.gh_repo_url}
            target="_blank" >
            <Icon
              name="github"
              size="big"
              style={{margin:'0px'}}
            />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
)

export default Navbar