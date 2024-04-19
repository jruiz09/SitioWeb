import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/creditos.png';
import imgDetail2 from '../assets/autos.png';
import imgDetail3 from '../assets/wms.png';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Sistemas financieros'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Desarrollamos sistemas financieros.<br />
                        Donde se registran los pagos de los clientes y gestión de nuevos créditos<br />
                        Registrando cada movimiento en el sistema.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Sistema administrativo para consecionaria'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Además de administrar los ingresos y egresos vehiculos se adminsitran los gastos asociados a estos. <br /> 
                        Con el objetivo de dar visiblidad a nuestros clientes de sus gastos y ganancias.
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            
            <CustomGridItem item xs={12} sm={8} md={6} 
             sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Sistemas de gestión de almacenes'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Registrando los movimientos de entrada y salida de mercadería.<br />
                        Incluyendo ajustes y traslados entre ubicaciones de almacén.
                    </CustomTypography> 
                </Box>
                

            </CustomGridItem>
            <Grid item xs={12} sm={4} md={6}
                sx={{
                    order: {xs: 3, sm: 3, md: 4}
                }}>
                <img src={imgDetail3} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>
 
        </Grid>
    )
}

export default GetStarted;