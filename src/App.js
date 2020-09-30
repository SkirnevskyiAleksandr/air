import React from 'react';
import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import Facts from "./components/Facts/Facts";
import SectorsList from "./components/SectorsList/SectorsList";
import gsLogo from "./assets/GC_logo.png";
import ITNLogo from './assets/ITN_logo.png';
import shidLogo from './assets/shid_emozhl_logo.png';
import Footer from "./components/Footer/Footer";
import AirQuality from "./components/AirQuality/AirQuality";
function App() {
  const partners = [shidLogo,ITNLogo, gsLogo];
  const navLinks=
        [
          {title:"Основные факты", href:"#facts"},
          {title:"Индекс качества воздуха", href:"#quality"},
          {title:"Политика по уменьшению загрязнений", href:"#politics"}
        ];
  const factsSlides =
        [
          {
            id:"1",
            imgUrl: require("./assets/facts-slader/slider-1.jpg"),
            desc:"Женщины и дети – главные жертвы загрязнения воздуха"  
          },
          {
           id:"2",
            imgUrl:require("./assets/facts-slader/slider-2.jpg"),
            desc: "Защитники окружающей среды подвергаются преследованиям"
          },
          {
            id:"3",
            imgUrl:require("./assets/facts-slader/slider-3.jpg"),
            desc:"Загрязнение воздуха – нарушение прав человека"
          },
          {
            id:"4",
            imgUrl: require("./assets/facts-slader/slider-4.jpg"),
            desc:"4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
          },
          {
            id:"5",
            imgUrl:require("./assets/facts-slader/slider-5.jpg"),
            desc:"Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
          }
        ]; 
        const sectors=
          [
            {
              name:"Промышленность",
              imgUrl: require("./assets/sectors/industry.jpg"),
              description:"Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)"
            },

            {
              name:"Транспорт",
              imgUrl: require("./assets/sectors/transport.jpg"),
              description:"Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
            },

            {
              name:"Городское планирование",
              imgUrl:require("./assets/sectors/sityPlaning.jpg"),
              description:"Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов"
            },

            {
              name:"Энергия",
              imgUrl:require("./assets/sectors/energi.jpg"),
              description:"Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
            },
            {
              name:"Энергетика",
              imgUrl:require("./assets/sectors/energetics.jpg"),
              description:" Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
            },
            {
              name:"Утилизация отходов",
              imgUrl:require("./assets/sectors/sityPlaning.jpg"),
              description:"стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
            }

          ];
      const author="Александром Скирневским";
      const designer=" Валерией Бубырь";         
  return(
   <>
    <HeroBlock title="Качество атмосферного воздуха и здоровье"
        logos={partners}
        links={navLinks}
      />
    <Facts title="Основные факты" slides={factsSlides}/> 
      <AirQuality/>
			<SectorsList title="Политика по уменьшению загрязнений"
			  subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
			  items={sectors}/>
			<Footer links={navLinks} partners={partners} author={author} designer={designer}/>
		</>
	);
}

export default App;
