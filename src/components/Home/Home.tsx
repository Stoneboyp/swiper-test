import SlideList from "../SlideList/SlideList"
import style from "./home.module.scss"
import '../../fonts/style.css'
const Home = () => {
    const font = {
        fontFamily: 'Orchidea Pro Medium'
    }
    return (
        <div className={style.home}>
            <header className={style.header}>
                <div className={style.header__content}>
                    <div className={style.header__logo}>
                        <img className={style.header__logo__vector} src="../../../public/vector.svg" />
                        <img className={style.header__logo__img} src="../../../public/circeya.svg" width={213} height={36} />
                    </div>
                    <div className={style.header__number}>
                        <span className={style.header__number__text}>
                            +7 (495) 495-49-54
                        </span>
                    </div>
                </div>
            </header>
            <div className={style.home__main}>
                <header className={style.home__main__header}>
                    <h1 style={font} className={style.home__main__header__text}>
                        UT ALIQUIP EX EA COMMODO CONSEQUAT
                    </h1>
                </header>
                <div className={style.home__main__blog}>
                    <div className={style.home__main__blog__item}>
                        <div className={style.home__main__blog__photo}>
                            <img src="../../../images/main/mainImage-1.png" alt="mainImage-1" width={860} height={480} />
                        </div>
                        <div className={style.home__main__blog__text}>
                            <h2 style={font} className={`${style.home__main__blog__text__header} ${style["home__main__blog__text__header--first"]}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h2>
                            <p style={font}>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    <div className={`${style.home__main__blog__item} ${style.home__main__blog__item}--second`}>
                        <div className={style.home__main__blog__photo}>
                            <img src="../../../images/main/mainImage-2.png" alt="mainImage-2" width={600} height={411} />
                        </div>
                        <div className={style.home__main__blog__text}>
                            <h2 style={font} className={style.home__main__blog__text__header}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h2>
                            <p style={font}>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
                <header className={style.home__main__header}>
                    <h1 style={font} className={style.home__main__header__text}>
                        Lorem ipsum dolor sit amet
                    </h1>
                </header>
                <div className={style.home__main__slider}>
                    <SlideList />
                </div>
                <header className={style.home__main__header}>
                    <h1 style={font} className={style.home__main__header__text}>
                        UT ALIQUIP EX EA COMMODO CONSEQUAT
                    </h1>
                </header>
                <div className={style.home__additional__blog}>
                    <div className={style.home__main__blog__item}>
                        <div className={style.home__main__blog__photo}>
                            <img src="../../../images/main/mainImage-3.png" alt="mainImage-3" width={860} height={480} />
                        </div>
                        <div className={style.home__main__blog__text}>
                            <h2 style={font} className={style.home__main__blog__text__header}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h2>
                            <p style={font}>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    <div className={`${style.home__main__blog__item} ${style.home__main__blog__item}--second`}>
                        <div className={style.home__main__blog__photo}>
                            <img src="../../../images/main/mainImage-4.png" alt="mainImage-4" width={600} height={411} />
                        </div>
                        <div className={style.home__main__blog__text}>
                            <h2 style={font} className={style.home__main__blog__text__header}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h2>
                            <p style={font}>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={style.home__footer}>
                <div className={style.home__footer__info}>
                    <span className={style.home__footer__info__text}>© TEST, 1022–2022</span>
                </div>
            </footer>
        </div>
    )

}

export default Home