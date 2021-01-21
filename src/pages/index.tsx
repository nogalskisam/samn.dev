import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import indexStyles from "./index.module.css"
import Img from "gatsby-image"
import aireLogic from "../images/airelogic.svg"
import aws from "../images/aws.svg"
import dotnet from "../images/dotnet.svg"
import nhsDigital from "../images/nhsdigital.svg"
import react from "../images/react.svg"

const paragraphStyles = {
	marginBottom: 48,
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

const logos = [
	{
		alt: "Amazon Web Services logo",
		location: aws,
		style: {
			order: 3
		}
	},
	{
		alt: "Aire Logic logo",
		location: aireLogic,
		style: {
			order: 2
		}
	},
	{
		alt: "Dot Net 5.0 logo",
		location: dotnet,
		style: {
			order: 1
		}
	},
	{
		alt: "NHS Digital Logo",
		location: nhsDigital,
		style: {
			order: 4
		}
	},
	{
		alt: "React logo",
		location: react,
		style: {
			order: 5
		}
	}
]

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<main>
				<title>Samuel Nogalski, Software Developer | samn.dev</title>

				<div className="header">
					{/* <img src="./images/profile.jpg" alt="A profile picture of Samuel Nogalski" width="250px" height="250px" /> */}
					<Img fixed={data.file.childImageSharp.fixed} />

					<h1>
						Hello there, I'm Sam. I'm a <span className="accent1">software developer</span> based in Leeds, and I work in <span className="accent1">health tech</span>.
					</h1>
					<h2>
						I am currently working the NHS Digital DPS team on behalf of <Link to="https://www.airelogic.com/" className="accent2">Aire Logic</Link>, and have previously worked at the Leeds Teaching Hospitals Trust, Engie, and thebigword.
					</h2>
				</div>

				<div className={indexStyles.logoPanel}>
					{logos.map(logo => (
						<img src={logo.location} alt={logo.alt} />
					))}
				</div>

				<div className="content">
					<div className={indexStyles.about}>
						<p style={paragraphStyles}>
							I made this website primarily to learn some new tech. I wanted to brush up on my React knowledge and thought Gatsby looked interesting. I also felt like I was slacking in my knowledge of containerisation and orchestration, so I'm using it to play around with Docker and Kubernetes on a small scale. I'll ocassionally write some blog posts too, I guess.
						</p>
						<p style={paragraphStyles}>
							My background is predominantly as a full stack .NET Developer, working with React, Angular 7, and Azure over multiple roles since 2014. I'm always eager to learn new tech, and am currently focusing my learning on Kubernetes, Python, and achieving my AWS Certifications.
						</p>
						<p style={paragraphStyles}>
							Feel free to get in touch, whether it be work related, health tech related, or if you just need somebody to chat to. You can catch me on the socials linked below, or at the pub 🍻.
						</p>
					</div>

					<div className="links">
						<ul>
							{links.map(link => (
								<li>
									<span>
										<Link
											to={`${link.url}`}>
											{link.text}
										</Link>
										<p>{link.description}</p>
									</span>
								</li>
							))}
						</ul>
					</div>

					<div className="links-mobile"></div>
				</div>
			</main>
		</Layout>
	)
}

export default IndexPage
