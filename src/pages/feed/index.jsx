

import bannerImage from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from "../../components/UserInfo";
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header  autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo percentual={80} nome="Rafael Lima" image="https://avatars.githubusercontent.com/u/99049995?v=4"/>
                <UserInfo percentual={27} nome="Rafael Lima" image="https://avatars.githubusercontent.com/u/99049995?v=4"/>
                <UserInfo percentual={89} nome="Rafael Lima" image="https://avatars.githubusercontent.com/u/99049995?v=4"/>
                <UserInfo percentual={57} nome="Rafael Lima" image="https://avatars.githubusercontent.com/u/99049995?v=4"/>
                <UserInfo percentual={12} nome="Rafael Lima" image="https://avatars.githubusercontent.com/u/99049995?v=4"/>
            </Column>           
            
        </Container>
        
    </>)
}

export { Feed }