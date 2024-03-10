import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

import { api } from '../../services/api';
import { Column,  Container, FazerLogin, JaTenhoConta, Row, SubtitleLogin, Title, TitleLogin, Wrapper, TextCriarConta,  } from './styles';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('Email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required()

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver (schema),
        mode: 'onChange',
    })   

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha invalido.')}
        }catch{
            alert('Houve um erro, tente novamente')
        }
    };

   

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>                   
                A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas
                </Title>

            </Column>
            <Column>
                < Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    
                        
                    
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <Input name="Nome" errorMessage={errors?.email?.message} control={control} placeholder={"Nome Completo"} leftIcon={<MdPerson/>}/>

                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail/>}/>

                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>

                        <Button title="Criar minha conta" variant= "secondary" type="submit" />
                    </form>

                    <TextCriarConta>Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.</TextCriarConta>
                    
                    <Row>
                        <JaTenhoConta>Já tenho conta. </JaTenhoConta>
                        <FazerLogin>Fazer login </FazerLogin>
                    </Row>
                </Wrapper>
                
            </Column>
        </Container>
        
    </>)
}

export { Cadastro }