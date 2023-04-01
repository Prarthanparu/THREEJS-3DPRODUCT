import { proxy } from 'valtio'

const state = proxy({
intro: true,
color: "#B9E9FC",
isLogoTexture: true,
isFullTexture:false,
logoDecal: './paru.png',
fullDecal: './Prarthan.png',
});

export default state;