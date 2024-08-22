import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url';
import dotenv from "dotenv"


const _dirname=dirname(fileURLToPath(import.meta.url))
const app = express();

dotenv.config()
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
const port= process.env.PORT

// Home Page
app.get('/',(req,res)=>{
  res.sendFile(_dirname+'/public/welcome page/welcome.html')
})

//////////////////////////////////////////////////////////

//Youtue Downloader App

app.get("/youtubedownloader",(req,res)=>{
  res.sendFile(_dirname+'/public/youtubeDownloder/ytd.html')
})

/*app.post('/submit', async (req, res) => {
  const youtubeUrl = req.body.yturl;

  try {
    // Make a POST request to your Flask API
    const response = await fetch('http://127.0.0.1:5000/get_audio?url=' + encodeURIComponent(youtubeUrl));
    const data = await response.json();

    res.send(`<h1>${data.title}</h1><p>${data.message}</p>`);
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});*/
//////////////////////////////////////////////////////////


app.listen(port,()=>{
  console.log('server is running on '+port)
})