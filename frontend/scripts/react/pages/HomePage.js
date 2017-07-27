import React from 'react'

import TeleportWelcome from '../components/TeleportWelcome'

const HomePage = () => (
  <main className='page home-page main'>
    <TeleportWelcome {...JSON.parse(window.TELEPORT_WELCOME_STRING)} />
  </main>
)

export default HomePage
