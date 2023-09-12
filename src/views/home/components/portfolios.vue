<template>
  <div class='portfolio-con'>
    <div class="con-title">
      <img src="../../../assets/images/projects-icon.png" alt="">
    </div>
    <div class="con-title1">We have successfully incubated and invested in leading projects in its early stages. With
      comprehensive knowledge of frontier technology and zero-to-one project experience, we can add greater value to our
      portfolio projects in addition to financial investment.</div>
    <div class="con-list">
      <div class="con-list-title">
        <div class="title-txt">Portfolio Funding</div>
        <div class="con-title-line"></div>
      </div>
      <div class="portfolio-list">
        <div class="portfolio-li">
          <div class="portfolio-li-imgs">
            <img class="portfolio-li-img" src="../../../assets/images/funding-1.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-con">
            <div class="p-li-title">Nomad Capital</div>
            <div class="p-li-txt">An operator fund that provides hands-on assistance to help projects develop and scale.
            </div>
            <div class="p-li-con">
              <img @click="goLinck('https://nomadcapital.io/')" src="../../../assets/images/svg/svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/NomadCapital_io')" src="../../../assets/images/svg/svg2.svg"
                alt="" srcset="">
              <img src="../../../assets/images/svg/svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgs">
            <img class="portfolio-li-img" src="../../../assets/images/funding-2.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-con">
            <div class="p-li-title">GEEKCARTEL</div>
            <div class="p-li-txt">Venture & incubation DAO.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.geekcartel.org/')" src="../../../assets/images/svg/svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/geek_cartel')" src="../../../assets/images/svg/svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/geekcartel')"
                src="../../../assets/images/svg/svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgs">
            <img class="portfolio-li-img" src="../../../assets/images/funding-3.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-con">
            <div class="p-li-title">MetaWeb Ventures</div>
            <div class="p-li-txt">A global builder focused blockchain fund.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.metaweb.vc/')" src="../../../assets/images/svg/svg1.svg" alt="" srcset="">
              <img @click="goLinck('https://twitter.com/MetaWebVC')" src="../../../assets/images/svg/svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/metaweb-vc')"
                src="../../../assets/images/svg/svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgs">
            <img class="portfolio-li-img" src="../../../assets/images/funding-4.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-con">
            <div class="p-li-title">UpHonest Capital</div>
            <div class="p-li-txt" style="font-size: 14px;">An early-stage VC firm focused on partnering with great
              entrepreneurs to build global companies in the world's largest markets.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.uphonestcapital.com/')" src="../../../assets/images/svg/svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/UpHonestCapital')" src="../../../assets/images/svg/svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/uphonest-capital/')"
                src="../../../assets/images/svg/svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgs">
            <img class="portfolio-li-img" src="../../../assets/images/funding-5.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-con">
            <div class="p-li-title">Draper Dragon</div>
            <div class="p-li-txt">A cross-border venture fund that connects Silicon Valley and Asia.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.uphonestcapital.com/')" src="../../../assets/images/svg/svg1.svg" alt=""
                srcset="">
              <img src="../../../assets/images/svg/svg2.svg" alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/draper-dragon')"
                src="../../../assets/images/svg/svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgs">
            <img class="portfolio-li-img" src="../../../assets/images/funding-6.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-con">
            <div class="p-li-title">ShangBay Capital</div>
            <div class="p-li-txt">A leading venture capital firm based in the heart of innovation.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.shangbaycapital.com/')" src="../../../assets/images/svg/svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/shangbaycapital')" src="../../../assets/images/svg/svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/shangbaycapital')"
                src="../../../assets/images/svg/svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgs">
            <img class="portfolio-li-img" src="../../../assets/images/funding-7.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-con">
            <div class="p-li-title">IOSG Venture</div>
            <div class="p-li-txt">A community-friendly and research-driven early-stage venture firm.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://iosg.vc/')" src="../../../assets/images/svg/svg1.svg" alt="" srcset="">
              <img @click="goLinck('https://twitter.com/IOSGVC')" src="../../../assets/images/svg/svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/iosgvc')" src="../../../assets/images/svg/svg3.svg"
                alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="con-listt" id="atsarget">
      <div class="con-list-title">
        <div class="title-txt">Portfolio-Projects</div>
        <div class="con-title-line"></div>
      </div>
      <div class="portfolio-listt" v-if="isSize>600">
        <!-- 1 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgst">
            <img class="portfolio-li-imgt1" src="../../../assets/images/projects/1.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-1.png" alt="" srcset="">
            <div class="p-li-title">Spacex</div>
            <div class="p-li-txt">SpaceX designs, manufactures and launches advanced rockets and spacecraft.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.spacex.com/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/SpaceX')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/spacex')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgst" style="background-color: #EEE;">
            <img class="portfolio-li-imgt2" src="../../../assets/images/projects/2.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-2.png" alt="" srcset="">
            <div class="p-li-title">Neuralink</div>
            <div class="p-li-txt">Creating a general-purpose, high-bandwidth interface to the brain.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://neuralink.com/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/neuralink')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/neuralink')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgst" style="background-color: #FFF;">
            <img class="portfolio-li-imgt3" src="../../../assets/images/projects/3.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-3.png" alt="" srcset="">
            <div class="p-li-title">Crypto.com</div>
            <div class="p-li-txt">The world’s leading cryptocurrency platform.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://crypto.com/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/cryptocom')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/cryptocom')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgst" style="background-color: #EEE;">
            <img class="portfolio-li-imgt4" src="../../../assets/images/projects/4.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-4.png" alt="" srcset="">
            <div class="p-li-title">Gemini</div>
            <div class="p-li-txt">The Regulated Crypto Exchange, Est 2014.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.gemini.com/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/Gemini')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/geminitrust/')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgst" style="background-color: #EEE;">
            <img class="portfolio-li-imgt5" src="../../../assets/images/projects/5.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-5.png" alt="" srcset="">
            <div class="p-li-title">Consensys</div>
            <div class="p-li-txt">A complete suite of trusted products to build anything in Web3.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://consensys.io/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/Consensys')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/consensys-software-inc')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgst">
            <img class="portfolio-li-imgt6" src="../../../assets/images/projects/6.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-6.png" alt="" srcset="">
            <div class="p-li-title">OpenSea</div>
            <div class="p-li-txt">OpenSea is the world's first and largest web3 marketplace for NFTs and crypto
              collectibles.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://opensea.io/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/opensea')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/opensea-io')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgst" style="background-color: #EEE;">
            <img class="portfolio-li-imgt7" src="../../../assets/images/projects/7.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-7.png" alt="" srcset="">
            <div class="p-li-title">Animoca Brands</div>
            <div class="p-li-txt">Driving digital property rights via NFTs and gaming to build the open metaverse.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.animocabrands.com/')" src="../../../assets/images/svg/dark-svg1.svg"
                alt="" srcset="">
              <img @click="goLinck('https://twitter.com/animocabrands')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/animoca-brands')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgst">
            <img class="portfolio-li-imgt8" src="../../../assets/images/projects/8.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-8.png" alt="" srcset="">
            <div class="p-li-title">Alchemy Pay</div>
            <div class="p-li-txt">Bridging the fiat and crypto global economies.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://alchemypay.org/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/AlchemyPay')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/alchemypay/')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <!-- 9 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgst" style="background-color: #EEE;">
            <img class="portfolio-li-imgt9" src="../../../assets/images/projects/9.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-9.png" alt="" srcset="">
            <div class="p-li-title" style="margin-top: 12px;">Ryder</div>
            <div class="p-li-txt" style="font-size: 12px; margin-top: 12px;">A leading logistics & transportation company
              that provides supply chain, dedicated transportation, and commercial fleet management solutions.</div>
            <div class="p-li-con" style="margin-top: 6px;">
              <img @click="goLinck('https://www.ryder.com/en-us')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/rydersysteminc')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/ryder-system-inc')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgst">
            <img class="portfolio-li-imgt10" src="../../../assets/images/projects/10.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-10.png" alt="" srcset="">
            <div class="p-li-title">Bit.Store</div>
            <div class="p-li-txt">One Crypto Card for All Your Web3 Needs</div>
            <div class="p-li-con">
              <img @click="goLinck('https://bit.store/')" src="../../../assets/images/svg/dark-svg1.svg" alt="" srcset="">
              <img @click="goLinck('https://twitter.com/www_bit_store')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/bitstoreofficial')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgst" style="background-color: #EEE;">
            <img class="portfolio-li-imgt11" src="../../../assets/images/projects/11.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-11.png" alt="" srcset="">
            <div class="p-li-title">Kresko.fi</div>
            <div class="p-li-txt" style="font-size: 12px; margin-top: 12px;"> A composable and capital efficient platform
              that makes wealth accessible on a mobile phone.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.kresko.fi/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/KreskoFi')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/kreskolabs')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgst">
            <img class="portfolio-li-imgt12" src="../../../assets/images/projects/12.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-cont animate__animated animate__fadeIn">
            <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-12.png" alt="" srcset="">
            <div class="p-li-title">lifeform</div>
            <div class="p-li-txt">Redefine Digital Citizen Identity.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://lifeform.cc/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/Lifeformcc')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/lifeformofficial/')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-listt" v-if="isSize<=600">
        <!-- 1 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts">
            <img class="portfolio-li-imgt1" src="../../../assets/images/projects/1.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-1.png" alt="" srcset=""> -->
            <div class="p-li-title">Spacex</div>
            <div class="p-li-txt">SpaceX designs, manufactures and launches advanced rockets and spacecraft.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.spacex.com/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/SpaceX')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/spacex')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts" style="background-color: #EEE;">
            <img class="portfolio-li-imgt2" src="../../../assets/images/projects/2.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-2.png" alt="" srcset=""> -->
            <div class="p-li-title">Neuralink</div>
            <div class="p-li-txt">Creating a general-purpose, high-bandwidth interface to the brain.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://neuralink.com/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/neuralink')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/neuralink')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts" style="background-color: #FFF;">
            <img class="portfolio-li-imgt3" src="../../../assets/images/projects/3.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-3.png" alt="" srcset=""> -->
            <div class="p-li-title">Crypto.com</div>
            <div class="p-li-txt">The world’s leading cryptocurrency platform.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://crypto.com/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/cryptocom')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/cryptocom')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts" style="background-color: #EEE;">
            <img class="portfolio-li-imgt4" src="../../../assets/images/projects/4.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-4.png" alt="" srcset=""> -->
            <div class="p-li-title">Gemini</div>
            <div class="p-li-txt">The Regulated Crypto Exchange, Est 2014.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.gemini.com/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/Gemini')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/geminitrust/')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts" style="background-color: #EEE;">
            <img class="portfolio-li-imgt5" src="../../../assets/images/projects/5.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-5.png" alt="" srcset=""> -->
            <div class="p-li-title">Consensys</div>
            <div class="p-li-txt">A complete suite of trusted products to build anything in Web3.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://consensys.io/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/Consensys')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/consensys-software-inc')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts">
            <img class="portfolio-li-imgt6" src="../../../assets/images/projects/6.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-6.png" alt="" srcset=""> -->
            <div class="p-li-title">OpenSea</div>
            <div class="p-li-txt">OpenSea is the world's first and largest web3 marketplace for NFTs and crypto
              collectibles.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://opensea.io/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/opensea')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/opensea-io')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts" style="background-color: #EEE;">
            <img class="portfolio-li-imgt7" src="../../../assets/images/projects/7.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-7.png" alt="" srcset=""> -->
            <div class="p-li-title">Animoca Brands</div>
            <div class="p-li-txt">Driving digital property rights via NFTs and gaming to build the open metaverse.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.animocabrands.com/')" src="../../../assets/images/svg/dark-svg1.svg"
                alt="" srcset="">
              <img @click="goLinck('https://twitter.com/animocabrands')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/animoca-brands')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts">
            <img class="portfolio-li-imgt8" src="../../../assets/images/projects/8.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-8.png" alt="" srcset=""> -->
            <div class="p-li-title">Alchemy Pay</div>
            <div class="p-li-txt">Bridging the fiat and crypto global economies.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://alchemypay.org/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/AlchemyPay')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/alchemypay/')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <!-- 9 -->
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts" style="background-color: #EEE;">
            <img class="portfolio-li-imgt9" src="../../../assets/images/projects/9.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-9.png" alt="" srcset=""> -->
            <div class="p-li-title" style="margin-top: 12px;">Ryder</div>
            <div class="p-li-txt" style="font-size: 12px; margin-top: 12px;">A leading logistics & transportation company
              that provides supply chain, dedicated transportation, and commercial fleet management solutions.</div>
            <div class="p-li-con" style="margin-top: 6px;">
              <img @click="goLinck('https://www.ryder.com/en-us')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/rydersysteminc')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/ryder-system-inc')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts">
            <img class="portfolio-li-imgt10" src="../../../assets/images/projects/10.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-10.png" alt="" srcset=""> -->
            <div class="p-li-title">Bit.Store</div>
            <div class="p-li-txt">One Crypto Card for All Your Web3 Needs</div>
            <div class="p-li-con">
              <img @click="goLinck('https://bit.store/')" src="../../../assets/images/svg/dark-svg1.svg" alt="" srcset="">
              <img @click="goLinck('https://twitter.com/www_bit_store')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/bitstoreofficial')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts" style="background-color: #EEE;">
            <img class="portfolio-li-imgt11" src="../../../assets/images/projects/11.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-11.png" alt="" srcset=""> -->
            <div class="p-li-title">Kresko.fi</div>
            <div class="p-li-txt" style="font-size: 12px; margin-top: 12px;"> A composable and capital efficient platform
              that makes wealth accessible on a mobile phone.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://www.kresko.fi/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/KreskoFi')" src="../../../assets/images/svg/dark-svg2.svg" alt=""
                srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/kreskolabs')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="portfolio-li">
          <div class="portfolio-li-imgsts">
            <img class="portfolio-li-imgt12" src="../../../assets/images/projects/12.png" alt="" srcset="">
          </div>
          <div class="portfolio-li-conts">
            <!-- <img class="portfolio-li-cont-img" src="../../../assets/images/projects/dark-12.png" alt="" srcset=""> -->
            <div class="p-li-title">lifeform</div>
            <div class="p-li-txt">Redefine Digital Citizen Identity.</div>
            <div class="p-li-con">
              <img @click="goLinck('https://lifeform.cc/')" src="../../../assets/images/svg/dark-svg1.svg" alt=""
                srcset="">
              <img @click="goLinck('https://twitter.com/Lifeformcc')" src="../../../assets/images/svg/dark-svg2.svg"
                alt="" srcset="">
              <img @click="goLinck('https://www.linkedin.com/company/lifeformofficial/')"
                src="../../../assets/images/svg/dark-svg3.svg" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive,computed, toRefs, onMounted, getCurrentInstance, onActivated } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMain } from '../../../../store/index';
import headerBar from '../../../components/headerBar.vue'
export default defineComponent({
  components: { headerBar },
  setup() {
    const { proxy } = getCurrentInstance() as any
    const router = useRouter()
    const couponStore = useMain();
    const queryRoute = useRoute()
    const data = reactive({})
    const isSize =  computed(() => couponStore.handleSize)
    onActivated(() => {
      if (queryRoute.params.no == '2') {
        window.scrollTo(0, document.body.scrollHeight)
      } else {
        window.scrollTo(0, 0)
      }
    })
    onMounted(() => {
      if (queryRoute.params.no == '2') {
        window.scrollTo(0, document.body.scrollHeight)
      } else {
        window.scrollTo(0, 0)
      }
    })
    const infoMethods = {
      goLinck(url: string) {
        const w = window.open("about:blank") as any;
        w.location.href = url ? url : ''
      }

    }
    return {
      ...toRefs(data),
      isSize,
      router,
      queryRoute,
      ...infoMethods,
    }
  },
})

</script>
<style scoped lang='scss'>
@media screen and (max-width: 600px){
  .portfolio-con {
    width:calc( 100% - 48px);
    margin:  0 auto;

    .con-title {
      width:291px;
      img{
        width: 100%;
      }
    }

    .con-title1 {
      width: 100%;
      font-size:20px;
      color: #666;
      margin:32px 0 40px 0;
    }

    .con-list {
      margin: 32px 0 40px 0;

      .con-list-title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        color: #000;
        font-weight: 600;
        .title-txt {
          width: 173px;
        }
        .con-title-line {
          width:39%;
          height: 1px;
          background: #999;
        }
      }

      .portfolio-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 64px;

        .portfolio-li {
          width:100%;
          margin-bottom: 40px;

          .portfolio-li-imgs {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 217px;
            border: 1px solid rgba(0, 0, 0, 0.10);
            background: #000;

            img {
              height: 39px;
              object-fit: cover;
            }
          }

          .portfolio-li-con {
            font-size: 16px;
            color: #000;
            margin-top: 24px;

            .p-li-title {
              color: #333;
              font-weight: 600;
            }

            .p-li-txt {
              height: 88px;
              width: 235px;
              font-weight: 400;
              margin-top: 12px;
            }

            .p-li-con {
              display: flex;
              align-items: center;
              margin-top: 12px;

              img {
                width: 20px;
                height: 20px;
                margin-right: 16px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .con-listt {
      
      .con-list-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        color: #000;
        font-weight: 600;

        .title-txt {
          width: 178px;
          flex-shrink: 0;
        }
        .con-title-line {
          width:40%;
          height: 1px;
          background: #999;
        }
      }

      .portfolio-listt {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-top: 64px;

        .portfolio-li {
          position: relative;
          width: 100%;
          cursor: pointer;

          .portfolio-li-imgst {
            display: flex;
            align-items: center;
            justify-content: center;
            width:100%;
            height: 250px;
            border: 1px solid rgba(0, 0, 0, 0.10);
            background: #FFF;

            img {
              max-width: 159px;
              max-height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt1 {
              width: 143px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt2 {
              width: 121px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt3 {
              width: 159px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt4 {
              width: 167px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt5 {
              width: 173px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt6 {
              width: 157px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt7 {
              width: 114px;
              height: 64px;
              object-fit: contain;
            }

            .portfolio-li-imgt8 {
              width: 175px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt9 {
              width: 130px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt10 {
              width: 106px;
              height: 106px;
              object-fit: cover;
            }

            .portfolio-li-imgt11 {
              width: 106px;
              height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt12 {
              width: 94px;
              height: 94px;
              object-fit: contain;
            }

          }
  
          .portfolio-li-cont {
            width: 100%;
            font-size: 16px;
            color: #fff;
            position: absolute;
            top: 1px;
            left: 1px;
            right: 1px;
            bottom: 1px;
            padding: 32px 16px 0px 16px;
            background: #000;
            box-sizing: border-box;

            .portfolio-li-cont-img {
              height: 16px;
              object-fit: cover;
            }

            .p-li-title {
              font-weight: 500;
              margin-top: 45px;
            }

            .p-li-txt {
              font-size: 14px;
              line-height: 20px;
              width: 218px;
              margin-top: 12px;
            }

            .p-li-con {
              position: absolute;
              bottom: 16px;
              left: 16px;
              display: flex;
              align-items: center;
              margin-top: 20px;

              img {
                width: 20px;
                height: 20px;
                margin-right: 16px;
              }
            }

            display: none;
          }
          .portfolio-li-imgsts{
            display: flex;
            align-items: center;
            justify-content: center;
            width:100%;
            height: 163px;
            border: 1px solid rgba(0, 0, 0, 0.10);
            background: #FFF;

            img {
              max-width: 159px;
              max-height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt1 {
              width: 143px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt2 {
              width: 121px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt3 {
              width: 159px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt4 {
              width: 167px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt5 {
              width: 173px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt6 {
              width: 157px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt7 {
              width: 114px;
              height: 64px;
              object-fit: contain;
            }

            .portfolio-li-imgt8 {
              width: 175px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt9 {
              width: 130px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt10 {
              width: 106px;
              height: 106px;
              object-fit: cover;
            }

            .portfolio-li-imgt11 {
              width: 106px;
              height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt12 {
              width: 94px;
              height: 94px;
              object-fit: contain;
            }

          }
          .portfolio-li-conts {
            width: 100%;
            height: 163px;
            font-size: 16px;
            color: #fff;
            padding: 24px 16px 0px 16px;
            background: #000;
            box-sizing: border-box;


            .p-li-title {
              font-weight: 500;
            }

            .p-li-txt {
              font-size: 14px;
              line-height: 20px;
              width: 218px;
              margin-top: 12px;
            }

            .p-li-con {
              position: absolute;
              bottom: 16px;
              left: 16px;
              display: flex;
              align-items: center;
              margin-top: 20px;

              img {
                width: 20px;
                height: 20px;
                margin-right: 16px;
              }
            }
          }
        }

        .portfolio-li:hover {
          .portfolio-li-cont {
            display: block;
          }
        }
      }
    

    }

  }
}
@media screen and (max-width: 800px)and (min-width: 600px) {
  .portfolio-con {
    margin: 140px 24px 0 24px;

    .con-title {
      font-size: 48px;
      color: #000;
      font-weight: 600;
      text-align: center;
    }

    .con-title1 {
      font-size: 20px;
      letter-spacing: 0.5px;
      color: #666;
      width: 100%;
      text-align: center;
      margin: 0 auto;
      padding: 32px 0 100px 0;
    }

    .con-list {
      width: 100%;
      margin: 0 auto;

      .con-list-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #000;
        font-weight: 600;
        .title-txt {
          width: 173px;
          flex-shrink: 0;
        }
        .con-title-line {
          width: 100%;
          height: 1px;
          background: #999;
          margin-left: 37px;
        }
      }

      .portfolio-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 64px;

        .portfolio-li {
          width: 48.5%;
          margin-bottom: 40px;

          .portfolio-li-imgs {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 163px;
            border: 1px solid rgba(0, 0, 0, 0.10);
            background: #000;

            img {
              height: 39px;
              object-fit: cover;
            }
          }

          .portfolio-li-con {
            font-size: 16px;
            color: #000;
            margin-top: 24px;

            .p-li-title {
              color: #333;
              font-weight: 600;
            }

            .p-li-txt {
              height: 88px;
              width: 235px;
              font-weight: 400;
              margin-top: 12px;
            }

            .p-li-con {
              display: flex;
              align-items: center;
              margin-top: 12px;

              img {
                width: 20px;
                height: 20px;
                margin-right: 16px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .con-listt {
      max-width: 800px;
      margin: 0 auto;

      .con-list-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #000;
        font-weight: 600;

        .title-txt {
          width: 173px;
          flex-shrink: 0;
        }
        .con-title-line {
          width: 100%;
          height: 1px;
          background: #999;
          margin-left: 37px;
        }
      }

      .portfolio-listt {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-top: 64px;

        .portfolio-li {
          position: relative;
          width: 49.9%;
          cursor: pointer;

          .portfolio-li-imgst {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 250px;
            border: 1px solid rgba(0, 0, 0, 0.10);
            background: #FFF;

            img {
              max-width: 159px;
              max-height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt1 {
              width: 143px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt2 {
              width: 121px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt3 {
              width: 159px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt4 {
              width: 167px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt5 {
              width: 173px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt6 {
              width: 157px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt7 {
              width: 114px;
              height: 64px;
              object-fit: contain;
            }

            .portfolio-li-imgt8 {
              width: 175px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt9 {
              width: 130px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt10 {
              width: 106px;
              height: 106px;
              object-fit: cover;
            }

            .portfolio-li-imgt11 {
              width: 106px;
              height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt12 {
              width: 94px;
              height: 94px;
              object-fit: contain;
            }

          }

          .portfolio-li-cont {
            width: 100%;
            font-size: 16px;
            color: #fff;
            position: absolute;
            top: 1px;
            left: 1px;
            right: 1px;
            bottom: 1px;
            padding: 32px 16px 0px 16px;
            background: #000;
            box-sizing: border-box;

            .portfolio-li-cont-img {
              height: 16px;
              object-fit: cover;
            }

            .p-li-title {
              font-weight: 500;
              margin-top: 45px;
            }

            .p-li-txt {
              font-size: 14px;
              line-height: 20px;
              width: 218px;
              margin-top: 12px;
            }

            .p-li-con {
              position: absolute;
              bottom: 16px;
              left: 16px;
              display: flex;
              align-items: center;
              margin-top: 20px;

              img {
                width: 20px;
                height: 20px;
                margin-right: 16px;
              }
            }

            display: none;
          }
        }

        .portfolio-li:hover {
          .portfolio-li-cont {
            display: block;
          }
        }
      }

    }

  }
}

@media screen and (max-width: 1000px)and (min-width: 800px) {
  .portfolio-con {
    margin: 140px 24px 0 24px;

    .con-title {
      font-size: 48px;
      color: #000;
      font-weight: 600;
      text-align: center;
    }

    .con-title1 {
      font-size: 20px;
      letter-spacing: 0.5px;
      color: #666;
      width: 830px;
      text-align: center;
      margin: 0 auto;
      padding: 32px 0 100px 0;
    }

    .con-list {
      width: 100%;
      margin: 0 auto;

      .con-list-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #000;
        font-weight: 600;
        .title-txt {
          width: 173px;
          flex-shrink: 0;
        }
        .con-title-line {
          width: 100%;
          height: 1px;
          background: #999;
          margin-left: 37px;
        }
      }

      .portfolio-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 64px;

        .portfolio-li {
          width: 32%;
          margin-bottom: 40px;

          .portfolio-li-imgs {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 163px;
            border: 1px solid rgba(0, 0, 0, 0.10);
            background: #000;

            img {
              height: 39px;
              object-fit: cover;
            }
          }

          .portfolio-li-con {
            font-size: 16px;
            color: #000;
            margin-top: 24px;

            .p-li-title {
              color: #333;
              font-weight: 600;
            }

            .p-li-txt {
              height: 88px;
              width: 235px;
              font-weight: 400;
              margin-top: 12px;
            }

            .p-li-con {
              display: flex;
              align-items: center;
              margin-top: 12px;

              img {
                width: 20px;
                height: 20px;
                margin-right: 16px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .con-listt {
      max-width: 1000px;
      margin: 0 auto;

      .con-list-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #000;
        font-weight: 600;

        .title-txt {
          width: 173px;
          flex-shrink: 0;
        }
        .con-title-line {
          width: 100%;
          height: 1px;
          background: #999;
          margin-left: 37px;
        }
      }

      .portfolio-listt {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-top: 64px;

        .portfolio-li {
          position: relative;
          width: 33.2%;
          cursor: pointer;

          .portfolio-li-imgst {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 250px;
            border: 1px solid rgba(0, 0, 0, 0.10);
            background: #FFF;

            img {
              max-width: 159px;
              max-height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt1 {
              width: 143px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt2 {
              width: 121px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt3 {
              width: 159px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt4 {
              width: 167px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt5 {
              width: 173px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt6 {
              width: 157px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt7 {
              width: 114px;
              height: 64px;
              object-fit: contain;
            }

            .portfolio-li-imgt8 {
              width: 175px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt9 {
              width: 130px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt10 {
              width: 106px;
              height: 106px;
              object-fit: cover;
            }

            .portfolio-li-imgt11 {
              width: 106px;
              height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt12 {
              width: 94px;
              height: 94px;
              object-fit: contain;
            }

          }

          .portfolio-li-cont {
            width: 100%;
            font-size: 16px;
            color: #fff;
            position: absolute;
            top: 1px;
            left: 1px;
            right: 1px;
            bottom: 1px;
            padding: 32px 16px 0px 16px;
            background: #000;
            box-sizing: border-box;

            .portfolio-li-cont-img {
              height: 16px;
              object-fit: cover;
            }

            .p-li-title {
              font-weight: 500;
              margin-top: 45px;
            }

            .p-li-txt {
              font-size: 14px;
              line-height: 20px;
              width: 218px;
              margin-top: 12px;
            }

            .p-li-con {
              position: absolute;
              bottom: 16px;
              left: 16px;
              display: flex;
              align-items: center;
              margin-top: 20px;

              img {
                width: 20px;
                height: 20px;
                margin-right: 16px;
              }
            }

            display: none;
          }
        }

        .portfolio-li:hover {
          .portfolio-li-cont {
            display: block;
          }
        }
      }

    }

  }
}

@media screen and (min-width: 1000px) {
  .portfolio-con {
    margin-top: 140px;

    .con-title {
      font-size: 48px;
      color: #000;
      font-weight: 600;
      text-align: center;
    }

    .con-title1 {
      font-size: 20px;
      letter-spacing: 0.5px;
      color: #666;
      width: 830px;
      text-align: center;
      margin: 0 auto;
      padding: 32px 0 100px 0;
    }

    .con-list {
      max-width: 1000px;
      margin: 0 auto;

      .con-list-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #000;
        font-weight: 600;

        .con-title-line {
          width: 798px;
          height: 1px;
          background: #999;
          margin-left: 37px;
        }
      }

      .portfolio-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 64px;

        .portfolio-li {
          width: 317px;
          margin-bottom: 40px;

          .portfolio-li-imgs {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 211px;
            border: 1px solid rgba(0, 0, 0, 0.10);
            background: #000;

            img {
              height: 39px;
              object-fit: cover;
            }
          }

          .portfolio-li-con {
            font-size: 16px;
            color: #000;
            margin-top: 24px;

            .p-li-title {
              color: #333;
              font-weight: 600;
            }

            .p-li-txt {
              height: 88px;
              width: 235px;
              font-weight: 400;
              margin-top: 12px;
            }

            .p-li-con {
              display: flex;
              align-items: center;
              margin-top: 12px;

              img {
                width: 20px;
                height: 20px;
                margin-right: 16px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .con-listt {
      max-width: 1000px;
      margin: 0 auto;

      .con-list-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #000;
        font-weight: 600;

        .con-title-line {
          width: 790px;
          height: 1px;
          background: #999;
          margin-left: 37px;
        }
      }

      .portfolio-listt {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-top: 64px;

        .portfolio-li {
          position: relative;
          width: 25%;
          cursor: pointer;

          .portfolio-li-imgst {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100;
            height: 250px;
            border: 1px solid rgba(0, 0, 0, 0.10);
            background: #FFF;

            img {
              max-width: 159px;
              max-height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt1 {
              width: 143px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt2 {
              width: 121px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt3 {
              width: 159px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt4 {
              width: 167px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt5 {
              width: 173px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt6 {
              width: 157px;
              height: 36px;
              object-fit: contain;
            }

            .portfolio-li-imgt7 {
              width: 114px;
              height: 64px;
              object-fit: contain;
            }

            .portfolio-li-imgt8 {
              width: 175px;
              height: 40px;
              object-fit: contain;
            }

            .portfolio-li-imgt9 {
              width: 130px;
              height: 32px;
              object-fit: contain;
            }

            .portfolio-li-imgt10 {
              width: 106px;
              height: 106px;
              object-fit: cover;
            }

            .portfolio-li-imgt11 {
              width: 106px;
              height: 106px;
              object-fit: contain;
            }

            .portfolio-li-imgt12 {
              width: 94px;
              height: 94px;
              object-fit: contain;
            }

          }

          .portfolio-li-cont {
            width: 100%;
            font-size: 16px;
            color: #fff;
            position: absolute;
            top: 1px;
            left: 1px;
            right: 1px;
            bottom: 1px;
            padding: 32px 16px 0px 16px;
            background: #000;
            box-sizing: border-box;

            .portfolio-li-cont-img {
              height: 16px;
              object-fit: cover;
            }

            .p-li-title {
              font-weight: 500;
              margin-top: 45px;
            }

            .p-li-txt {
              font-size: 14px;
              line-height: 20px;
              width: 218px;
              margin-top: 12px;
            }

            .p-li-con {
              position: absolute;
              bottom: 16px;
              left: 16px;
              display: flex;
              align-items: center;
              margin-top: 20px;

              img {
                width: 20px;
                height: 20px;
                margin-right: 16px;
              }
            }

            display: none;
          }
        }

        .portfolio-li:hover {
          .portfolio-li-cont {
            display: block;
          }
        }
      }

    }

  }
}
</style>