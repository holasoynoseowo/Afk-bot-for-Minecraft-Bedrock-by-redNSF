const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  host: VZLADESAFIO.aternos.me,   
  port: 63855,         // optional, default 19132
  username: 'Notch',   // the username you want to join as, optional if online mode
  offline: true       // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.
})
