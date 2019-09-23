import React from 'react'

export function MainLayout({children}) {
  return (
    <main>
      <section className="main-body">
        {children}
      </section>
    </main>
  )
}

export default MainLayout

