import React from 'react'
import { BottomHalf, FormCard, FormHeader, FormHeader2, FormHolder, FormTitle, FormWrapper, LowerHalf, TextButton, TickHolder, UpperHalf } from './formElements'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { FlatTick } from './formElements';
import flat_tick from './flat_tick.png';

function FormComplete() {
    return (
        <FormWrapper>

            <FormHeader>Resume Generated</FormHeader>
            <FormCard>

                <TickHolder> 
                    <FlatTick src={flat_tick} ></FlatTick>
                   
                 </TickHolder>
                 <FormHeader2 style={{paddingLeft:'25rem'}} >Your resume has been downloaded.</FormHeader2>

            </FormCard>
            <Stack spacing={2} direction="row">
            </Stack>


        </FormWrapper>
    )
}

export default FormComplete