import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
 
    let HOT_URL="https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL="https://plus.unsplash.com/premium_photo-1711024165231-9be34714c01e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let RAINY_URL="https://images.unsplash.com/photo-1593981211728-41e4e796ec96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
           
            <div className='cardInfo'>
                <Card sx={{ maxWidth: 345 }}>
                 <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80?RAINY_URL:info.temp>15?HOT_URL:COLD_URL}
                title="green iguana" style={{objectFit:"cover"}}
                 />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {info.name} &nbsp;
                 {info.humidity>80?<ThunderstormIcon/>
                 :info.temp>15
                 ?<SunnyIcon/>
                 :<AcUnitIcon/>
                 }
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                 <p>Temperature: {info.temp}&deg;C</p>
                <p>MIN Temperature: {info.tempMin}&deg;C</p>
                <p>MAX Temperature: {info.tempMax}&deg;C</p>
                <p>Humidity: {info.humidity}</p>
                <p>Wind Speed: {info.wind}</p>
                <p>The weather can be described as <i>{info.weather}</i>  & feels like {info.feels_like}&deg;C</p>
                </Typography>
                </CardContent>
                </Card>
             </div>
            
        </div>
    )
}