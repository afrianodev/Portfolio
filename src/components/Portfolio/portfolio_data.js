import balanceBites from '../../assets/balance-bites.jpg'
import horrorPelis from '../../assets/casita-horror.jpg'
import shortFilms from '../../assets/treehouse-horror.jpg'

const portfolioInfo = [
    {
        w_img : balanceBites,
        w_name: 'Balance Bites',
        w_url: 'https://balancebites.vercel.app/',
        description: 'A responsive meal planning web app built with React and Tailwind CSS.'
    },
    {
        w_img : horrorPelis,
        w_name: 'Casita del Horror',
        w_url: 'https://casita-horror.vercel.app/',
        description: 'Is a web app that lets users watch classic horror movies online.'
    },
    {
        w_img : 'https://i.imgur.com/m8eRaRu.jpg',
        w_name: 'Short bites',
        w_url: 'https://short-bites.vercel.app/',
        description: 'Utilised APIs to display short films online, categorized for easy navigation.'
    },
    {
        w_img : 'https://i.imgur.com/rDll9Dq.jpg',
        w_name: 'Weather Radar',
        w_url: 'https://weatheradar.vercel.app/',
        description: 'real-time weather web app that provides users with current conditions.'
    }
];

export default portfolioInfo;