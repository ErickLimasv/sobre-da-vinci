import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import { PiPaintBrush, PiInfo, PiLightbulb } from "react-icons/pi";

import "./App.css"

export default function App() {
  const curiosidades = [
    {
      id: 0,
      img: {
        src: "/images/casa.jpg",
        alt: "Casa de Leonardo da Vinci."
      },
      title: "Nascimento",
      text: "Leonardo da Vinci nasceu em 15 de abril de 1452, na Vila de Vinci, na Itália. Leonardo era filho da camponesa Caterina Lippi e do tabelião Piero da Vinci. Seus pais não eram casados, logo, ele acabou sendo educado por parentes próximos.",
    },
    {
      id: 1,
      img: {
        src: "/images/vinci.jpg",
        alt: "Cidade de Vinci, na Itália."
      },
      title: "Você Sabia?",
      text: "Di ser Piero da Vinci não é o sobrenome de Leonardo. Usa-se essa denominação em razão de “Vinci” ser o nome do vilarejo onde ele nasceu e Piero ser o nome de seu pai, ou seja, é como se fosse “Leonardo Filho de Piero da Vila de Vinci”.",
    },
    {
      id: 2,
      img: {
        src: "/images/leonardo.jpg",
        alt: "Retrato de Leonardo da Vinci."
      },
      title: "Aparência",
      text: "Segundo estudos, ele tinha cabelos louros, olhos azuis e era canhoto. Quando jovem, muitos consideravam-no dono de uma incomparável beleza física. Porém, a imagem que a maioria guarda é do artista mais velho.",
    },
    {
      id: 3,
      img: {
        src: "/images/caderno.jpg",
        alt: "Caderno de Leonardo da Vinci."
      },
      title: "Anotações",
      text: "Desde sempre, ele registrava tudo em seus cadernos: rascunhos, pensamentos, emoções, planos e demais reflexões, abrangendo diversas áreas, como arte, anatomia, engenharia e ciência. Em algumas anotações, ele usava códigos ou escrevia de trás para frente.",
    },
    {
      id: 4,
      img: {
        src: "/images/estatua.jpg",
        alt: "Estátua de Leonardo da Vinci."
      },
      title: "Habilidades",
      text: "Criativo ao extremo, o artista tinha a especial habilidade de mesclar arte com ciência. Ele era, ao mesmo tempo, perfeccionista e procrastinador. Era vegetariano, por razões humanitárias.",
    },
    {
      id: 5,
      img: {
        src: "/images/tumulo.jpg",
        alt: "Túmulo de Leonardo da Vinci."
      },
      title: "Óbito",
      text: "Leonardo da Vinci morreu em 2 de maio de 1519 aos 67 anos em Cloux, na França. Ao que tudo indica ele provavelmente sofreu um derrame cerebral. Foi sepultado no convento da igreja de Saint-Florentin, em Amboise.",
    },
  ]

  const pinturas = [
    {
      id: 0,
      img: {
        src: "/images/dama.jpg",
        alt: "Pintura 'Dama com Arminho'."
      },
      title: "Dama com Arminho",
      text: "A modelo da obra, chamada Cecilia Gallerani, era a amante de Ludovico Sforza, que era duque de Milão. Na época em que seu retrato foi pintado ela tinha cerca de 16 anos de idade e era famosa por sua beleza. A obra pode ser vista no Museu Czartoryski, na Cracóvia, Polônia.",
    },
    {
      id: 1,
      img: {
        src: "/images/monalisa.jpg",
        alt: "Pintura 'Monalisa'."
      },
      title: "Monalisa",
      text: "Atualmente, o quadro da Monalisa fica exposto no Museu do Louvre, em Paris, França. É uma das mais famosas e importantes obras de arte da história, sendo avaliada, na década de 1960, em cerca de 100 milhões de dólares americanos.",
    },
    {
      id: 2,
      img: {
        src: "/images/a-ultima-ceia.jpg",
        alt: "Pintura 'A Última Ceia'."
      },
      title: "A Última Ceia",
      text: "É uma das obras mais emblemáticas de Leonardo da Vinci. Ela retrata a última ceia de Jesus Cristo ao lado de seus apóstolos, momentos antes dele ser crucificado. O afresco se encontra na Igreja e Convento Santa Maria Delle Grazie, em Milão, Itália.",
    },
  ]

  const invencoes = [
    {
      id: 0,
      img: {
        src: "/images/asas.png",
        alt: "Pintura 'Dama com Arminho'."
      },
      title: "Asas",
      text: "Leonardo Da Vinci não foi capaz de reproduzir o movimento dos pássaros em seus projetos, entretanto, a observação dos animais trouxe conceitos importantes para a aerodinâmica que ajudariam na criação do avião muitos séculos depois.",
    },
    {
      id: 1,
      img: {
        src: "/images/paraquedas.png",
        alt: "Pintura 'Monalisa'."
      },
      title: "Paraquedas",
      text: "O equipamento é semelhante ao paraquedas atual, entretanto, ele possui um formato de pirâmide. A ideia foi aprimorada e ganhou grande utilidade séculos depois, principalmente a partir da Segunda Guerra Mundial.",
    },
    {
      id: 2,
      img: {
        src: "/images/tanque.png",
        alt: "Pintura 'A Última Ceia'."
      },
      title: "Tanque",
      text: "O tanque de Leonardo Da Vinci seria um veículo de guerra equipado com canhões que atingiam um ângulo de 360°. A cobertura convexa tinha como finalidade desviar do fogo inimigo. O veículo tinha capacidade para oito pessoas.",
    },
  ]

  return (
    <>
      <header>
        <Navbar/>

        <Banner/>
      </header>

      <main>
        <Section
          id="curiosidades"
          title="curiosidades"
          content={curiosidades}
          icon={<PiInfo/>}
        />
        <Section
          id="pinturas"
          title="pinturas"
          content={pinturas}
          icon={<PiPaintBrush/>}
        />
        <Section
          id="invencoes"
          title="invenções"
          content={invencoes}
          icon={<PiLightbulb/>}
          png
        />
      </main>
      <Footer/>
    </>
  );
}