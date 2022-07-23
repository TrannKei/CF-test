import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function App() {

  const [outPut, setOutput] = useState("")

  const [data, setData] = useState({})
  useEffect(() => {
    async function getDataAPI() {
      const getData = await fetch('https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html')
        .then(res => res.json())
        .then(data => {
          setData(data.result)
        })
    }
    getDataAPI()

  }, [])
  const [fullOutput, setFullOutput] = useState("")
  const handleShr = () => {
    setOutput(data.short_link)
    setFullOutput(data.full_short_link)
    setBtn1(true)
    setBtn2(false)
    setBtn3(false)
  }
  const handle9qr = () => {
    setOutput(data.short_link2)
    setFullOutput(data.full_short_link2)
    setBtn2(true)
    setBtn1(false)
    setBtn3(false)
  }
  const handleShiny = () => {
    setOutput(data.short_link3)
    setFullOutput(data.full_share_link)
    setBtn3(true)
    setBtn2(false)
    setBtn1(false)
  }
  const [show, setShow] = useState(false)
  const showLink = () => {
    setShow(true)
    setInput("")
  }
  const [input, setInput] = useState("")

  const [btn1, setBtn1] = useState(false)
  const [btn2, setBtn2] = useState(false)
  const [btn3, setBtn3] = useState(false)
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1 >Link Shortener</h1>
        </div>
        <div className='input-tag'>
          <p>Enter a link:</p>
          <Box
            
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          > 
          <TextField id="filled-basic" variant="filled"  value={input}
            onChange={(e) => setInput(e.target.value)}

            placeholder="example.com" />
          </Box>
          
          <Stack direction="row" spacing={2}>
            <Button variant="contained"
             
              onClick={showLink}
            >
              Link
            </Button>
          </Stack>

        </div>
        <div className='body'>
          <p>Short domain:</p>
          <div
            className={btn1 ? 'on-target' : 'button-click'}
            onClick={handleShr}
          >shrtco.de</div>
          <div
            className={btn2 ? 'on-target' : 'button-click'}
            onClick={handle9qr}
          >9qr.de</div>
          <div
            className={btn3 ? 'on-target' : 'button-click'}
            onClick={handleShiny}
          >shiny.link</div>
        </div>
      </div>
      {show && <div className='output'>
        <h2>Link generated!</h2>
        <a className='linkto'
          href={fullOutput}
          target='_blank'
        ><h1>{outPut}</h1></a>
        <br />
        <div className='icon-container'>
          <a
            href='https://www.facebook.com/tr.nkei/'
            target='_blank'
            className='icon bg-fb'
          >
            <FacebookIcon />
          </a>
          <a
            href='https://www.facebook.com/tr.nkei/'
            target='_blank'
            className='icon'
          >
            <InstagramIcon />
          </a>
          <a
            href='mailto:trannkei1998@gmail.com'
            target='_blank'
            className='icon'
          >
            <MailOutlineIcon />
          </a>
          <a
            href='tel:0392363962'
            target='_blank'
            className='icon'
          >
            <WhatsAppIcon />
          </a>
        </div>

      </div>}
    </>
  );
}

export default App;
