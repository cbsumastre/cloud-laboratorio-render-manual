import React from 'react'

export const HomeComponent: React.FC = () => {
  return (
    <div className="presentation-card">
      <h1 className="presentation-title">Carlos Blázquez Sumastre</h1>
      <p className="presentation-subtitle">
        I am a senior software developer and passionate about technology.
      </p>
      <p className="presentation-tagline">
        If you want to know my work you can find it on{' '}
        <a href="https://github.com/cbsumastre" target="new">
          github
        </a>
      </p>
      <p className="presentation-tagline">
        Outside of work, I enjoy tv shows, video games, music, my friends and my
        little nephews.
        <div className="social">
          <a
            className="social-icon"
            data-tooltip="Gmail"
            href="mailto:cbsumastre@gmail.com"
            target="new"
          >
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </a>
          <a
            className="social-icon"
            data-tooltip="GitHub"
            href="https://github.com/cbsumastre"
            target="new"
          >
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a
            className="social-icon"
            data-tooltip="LinkedIn"
            href="https://es.linkedin.com/in/cbsumastre"
            target="new"
          >
            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
          <a
            className="social-icon"
            data-tooltip="Twitter"
            href="https://twitter.com/cbsumastre"
            target="new"
          >
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </p>
    </div>
  )
}
