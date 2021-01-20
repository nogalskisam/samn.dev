import * as React from "react"
import Layout from "../components/layout"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 400
}
const headingAccentStyles = {
  color: "#663399",
}
const aireLogicStyle = {
  color: 'green'
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
  listStyleType: "none",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

// data
const links = [
  {
    text: "GitHub",
    url: "https://www.github.com/nogalskisam",
    description: "/nogalskisam"
  },
  {
    text: "Twitter",
    url: "https://www.twitter.com/samn_dev",
    description: "@samn_dev"
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/nogalskisam",
    description: "/nogalskisam"
  },
  {
    text: "Contact",
    url: "./contact",
    description: "Contact Form"
  }
]

const IndexPage = () => {
  return (
    <Layout>
    <main style={pageStyles}>
      <title>Samuel Nogalski, Software Developer | samn.dev</title>

      <h1 style={headingStyles}>
        Hello there, I'm Sam. I'm a <span style={headingAccentStyles}>software developer</span> based in Leeds, and I work in <span style={headingAccentStyles}>health tech</span>.
      </h1>
      <h2 style={headingStyles}>
        I currently work at NHS Digital on behalf of <a style={aireLogicStyle}>Aire Logic</a>, and have previously worked at the Leeds Teaching Hospitals Trust.
      </h2>
      <p style={paragraphStyles}>
        I made this website primarily to learn some new tech. I wanted to brush up on my React knowledge and thought Gatsby looked interesting. I also felt like I was slacking in my knowledge of containerisation and orchestration, so I'm using it to play around with Docker and Kubernetes on a small scale. I'll ocassionally write some blog posts too, I guess.
      </p>
      <p style={paragraphStyles}>
        My background is predominantly as a full stack .NET Developer, working with React, Angular 7, and Azure over multiple roles since 2014. I'm always eager to learn new tech, and am currently focusing my learning on Kubernetes, Python, and achieving my AWS Certifications.
      </p>
      <p style={paragraphStyles}>
        Feel free to get in touch, whether it be work related, health tech related, or if you just need somebody to chat to. You can catch me on the socials linked below, or at the pub 🍻.
      </p>
      <ul style={listStyles}>
        {links.map(link => (
          <li style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
    </Layout>
  )
}

export default IndexPage
