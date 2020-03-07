import React from 'react'
import { ReactComponent as Facebook } from './../assets/facebook.svg'
import { ReactComponent as Google } from './../assets/google.svg'
import { ReactComponent as Yelp } from './../assets/yelp.svg'

export default function SocialMediaIcon({ platform, height, width }) {
	switch (platform?.toLowerCase()) {
		case 'google':
			return <Google height={height} width={width}/>
		case 'facebook':
			return <Facebook height={height} width={width}/>
		case 'yelp':
			return <Yelp height={height} width={width}/>
		default:
			throw new Error(`platform not recognized: ${platform}`)
	}
}