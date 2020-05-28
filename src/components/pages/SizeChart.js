import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tsh from '../Asset/tsh.png'
import Snum from '../Asset/Snum.png'

export default function SizeChart() {

    return(
        <div >
            <Grid container >
         
              <Grid container item xs={12} md={6} lg={6}>
                  {/* <img style={{width:'100%'}} src='https://i.imgur.com/yJNUXDc.png' /> */}
                <img  style={{margin:'auto' , maxWidth:'100%'}} src={Tsh} />

              </Grid>
              
              <Grid  container item xs={12} md={6} lg={6}>
              {/* <img  className={classes.chart} src='https://i.imgur.com/Grbd8pz.png' /> */}
              <img style={{margin:'auto'}} src={Snum} />

                </Grid>
            </Grid>
        </div>
    )
};
