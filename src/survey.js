import React from 'react';
import Background from './flowers.jpg';
import { useForm } from "react-hook-form";
import { makeStyles, Paper} from '@material-ui/core';
import  Typography  from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, Radio,  Grid,  FormControl, FormLabel, FormControlLabel, RadioGroup} from "@material-ui/core";



const useStyles=makeStyles({
    root:{
        color:'#721e41',
        fontSize:'1.3rem',
        textAlign:'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin:'auto',
        height:'100vh',
        maxWidth:'100%',
        backgroundImage:`url(${Background})`,
        backgroundSize:'cover'
    },
    title:{
        color:'#721e41',
        fontSize:'1.7rem',
        textAlign:'center',
        marginTop:'5rem'
    },
    pageContent:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: '80%',
        margin: 'auto',
        padding:'50px',
        fontSize:'1rem',
        height:'30rem'
    },
    
    radio:{
        maxWidth: 'calc(100%/3)'
    },
    submit:{
        cursor:'pointer',
        color:'#721e41'
    }
});



export default function Survey(){
    const classes = useStyles();
    const{register,formState:{errors},handleSubmit}=useForm();
    const onSubmit=(data)=>{alert(JSON.stringify(data))};
    console.log(errors);
    return(
    <>
        <Grid container className={classes.root} >
       
            <Typography variant="h4"  className={classes.title}>
                Product Feedback Survey
            </Typography>
            <Typography variant="subtitle1" align="center" >
                Let us know your opinion.
            </Typography>
        
            
        <form onSubmit={handleSubmit(onSubmit)} className={classes.pageContent}>
            <Paper style={{padding:20}}>
                <Grid container >
        
                       
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Are you happy with our products?</FormLabel>
                                    <RadioGroup row className={classes.radio}>
                                        <FormControlLabel
                                            label="Love it"
                                            control={
                                                 <TextField
                                                     type="radio" 
                                                     component={Radio}
                                                     value="Love it" 
                                                    {...register('love it',{required:true})}
                                                />
                                            }
                                        />
                                         <FormControlLabel
                                             label="Just ok"
                                             control={
                                                 <TextField
                                                     type="radio" 
                                                     component={Radio}
                                                     value="Just ok" 
                                                     {...register('Just ok',{required:true})}
                                                   />
                                             }
                                         />
                                     </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                 className={classes.submit}          
                                 type="submit"
                                 variant="contained"
                                 color="secondary"
                                 >
                                 Submit
                            </Button>
                        </Grid>
                    </Grid>
                    </Paper>
                </form>
                
        </Grid>
    
    </>
    );
}

