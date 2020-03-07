import React from 'react'
import { ReactComponent as Facebook } from './../assets/facebook.svg'
import { ReactComponent as Google } from './../assets/google.svg'
import { ReactComponent as Yelp } from './../assets/yelp.svg'

export default function SocialMediaIcon({ platform }) {
	switch (platform.toLowerCase()) {
		case 'google':
			return <Google />
		case 'facebook':
			return <Facebook />
		case 'yelp':
			return <Yelp />
		default:
			throw new Error(`platform not recognized: ${platform}`)
	}
}