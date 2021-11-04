import React from 'react';
import {Paper, makeStyles} from '@material-ui/core';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { IconButton, Typography } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import BookIcon from '@mui/icons-material/Book';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
const useStyles = makeStyles({
	root:{
		fontSize:'1.4rem',
		maxWidth:'80%',
		display:'flex',
		flexDirection:'row'
	},
	pageContent:{
		color:'white',
		textAlign: 'center',
		padding:'50px',
		backgroundColor:'#bdddeb'
		}
});



export default function Home (){
	const classes = useStyles();
	return(
		<Container style={{margin: 'auto', maxWidth: 500, padding: 10}}>
        	
            	<Typography variant="h3" align="center" gutterBottom>
				Welcome and enjoy Canon Cameras!
				Stay update with the products
           		</Typography>
				
        	<Paper className={classes.pageContent}>
			
				<Grid container spacing={4} justify="center">
					<Grid item xs={12}>
						<Paper style={{height:75,width:'100%'}}>
							<IconButton>
								<BookIcon/>
							</IconButton>
							<Typography>Canon cameras have awesome specs.</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper style={{height:75,width:'100%'}}>
							<IconButton>
								<LocalShippingOutlinedIcon/>
							</IconButton>
							<Typography>We offer free shipping</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper style={{height:75,width:'100%'}}>
							<IconButton>
								<AddIcCallIcon/>
							</IconButton>
							<Typography>We have online technical support.</Typography>
						</Paper>
					</Grid>
				</Grid>
		 	</Paper>
		</Container>
	)
}
