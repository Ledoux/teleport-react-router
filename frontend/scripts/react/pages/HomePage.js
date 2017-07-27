import React from 'react'

import TeleportWelcome from '../components/TeleportWelcome'

const HomePage = () => (
  <main className='home-page'>
    <TeleportWelcome {...JSON.parse(window.TELEPORT_WELCOME_STRING)} />
  </main>
)

export default HomePage
