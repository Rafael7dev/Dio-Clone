import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture 
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://media.istockphoto.com/id/534037450/pt/foto/red-autumn-and-fishing-pier.jpg?s=612x612&w=0&k=20&c=x7inYh1qSxfK13MfNtBWohKqk51vV5wEbogqBuZLou8="/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/99049995?v=4"/>
                <div>
                    <h4>Rafael Lima</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10   {/* curtidas */}
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}


export { Card }