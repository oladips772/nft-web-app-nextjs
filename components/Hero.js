import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

function Hero() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover , sell and collect extraordinary NFTs
            </div>
            {/* description */}
            <div className={style.description}>
              Opensea is the world's first and largest NFTS marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>ExPlore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          {/* cardContainer */}
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              alt=""
              src="https://lh3.googleusercontent.com/jSniiLwosYg4YNa5ZJg4S115fP-vZ570m5Mrup117XaGUKiN2VW_vK4tYPXmaYJ1ku3pQqeMNdZWdXAvCXpH6QAckALelFdTGtgcDbY=s550"
            />
            {/* infoContainer */}
            <div className={style.infoContainer}>
              <img
                className="h-[2.5rem] w-[2.5rem] rounded-full"
                alt=""
                src="https://lh3.googleusercontent.com/jSniiLwosYg4YNa5ZJg4S115fP-vZ570m5Mrup117XaGUKiN2VW_vK4tYPXmaYJ1ku3pQqeMNdZWdXAvCXpH6QAckALelFdTGtgcDbY=s550"
              />
              {/* author */}
              <div className={style.author}>
                {/* name */}
                <div className={style.name}>Jolly</div>
                <a
                  href="https://lh3.googleusercontent.com/"
                  className="text-[#1868b7]"
                >holla denv</a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
