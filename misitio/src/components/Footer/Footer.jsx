import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'SIS'} />
    
        <FooterLink 
        text={'sistemasinformaticossur@gmail.com'} 
        />
             <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2024 Sistemas Informáticos Sur
        </Typography>
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Nuestros Servicios'} />
        <FooterLink text={'Desarrollo a medida'} />
        <FooterLink text={'Desarrollo de indicadores'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'Nuestros Proyectos'} />
        <FooterLink text={'Sistemas financieros'} />
        <FooterLink text={'Sistemas de almacén'} />
        <FooterLink text={'Sistemas de concesionarias'} />
      </StackColumn>


    </BoxRow>
  )
}

export default Footer