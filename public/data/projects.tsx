const megarocketImg = `${import.meta.env.VITE_PUBLIC_URL}/img/megarocket.png`
const herosImg = `${import.meta.env.VITE_PUBLIC_URL}/img/heroes-cards.png`
const pokeSearchImg = `${import.meta.env.VITE_PUBLIC_URL}/img/pokesearch.png`

export const ProjectData=[
    {
        id:1,
        title:"Mega Rocket",
        about: " Mega Rocket es un CRM para gestion de gimnasios desarrollado en React.Js en frontend y el backend desarrollado con ExpressJs.Consta de 4 roles para dividir la gestion del gimnasio de forma optima, de manera que cada uno de los participantes del dia a dia de un gimnasio pueden tener su cuenta en la plataforma y getionar su perfil de una forma comoda.",
        tags:["ReactJS", "Application Web Design", "Web Development"],
        demo:"https://cl-megarocket-app.vercel.app/auth/home",
        github:"https://github.com/CristianLotorto/megarocket-app",
        image: megarocketImg,
    },
    {
        id:2,
        title:"PokeSearch!",
        about: " Un proyecto desarrollado con HTML, CSS y Javascript utilizando una API de Pokemon. Es un buscador en el cual ingresas el nombre de un Pokemon y este aparece en forma de tarjeta con una breve información.",
        tags:["HTML", "CSS", "Javascript"],
        demo:"https://lotopokesearch.netlify.app/",
        github:"https://github.com/CristianLotorto/PokeSearch",
        image:pokeSearchImg,
    },
    {
        id:3,
        title:"Heros Card",
        about: " Un proyecto hecho puramente en HTML, Javascript y CSS. Tarjetas con informacion sobre tus super heroes favoritos.",
        tags:["HTML", "CSS", "JavaScript"],
        demo:"https://jvkbt.csb.app/",
        github:"https://github.com/CristianLotorto/Heores_Cards",
        image:herosImg,
    },
];