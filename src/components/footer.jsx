import React from 'react'
import '../styles/footer.css'

function footer() {
  return (
    <footer>
      <div className='footer-div'>
        <div className="footer-left">
            <a className="img-foot"      href="/"> <img src={ './images/investlylogo.jpg'}  /></a>
            <a className="logoName-foot" href="/"  style={{ cursor: 'pointer' }}>Investly</a>

            <p className="footerText0"> Organisation No.: 000-000-000 </p>
            <p className="footerText1"> Investly Fintech builds platforms & investment products to invest better in equities.
                An Investly is a basket of stocks/ETFs curated to reflect an idea </p>
            <p className="footerText2"> Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related 
                documents before investing. Investors should consider all risk factors and consult their financial advisor before investing </p>
        </div>

        <div className="Column11">
            <h11> Company </h11>
            <ul>
                <li><a href="/about"  style={{ cursor: 'pointer' }}>About       </a></li>
                <li><a href="/about"  style={{ cursor: 'pointer' }}>For Business</a></li>
                <li><a href="/about"  style={{ cursor: 'pointer' }}>Contact Us  </a></li>
                <li><a href="/about"  style={{ cursor: 'pointer' }}>Career      </a></li>                
            </ul>
        </div>

        <div className="Column12">
            <h12> Fine Print </h12>
            <ul>
                <li><a href="/about"  style={{ cursor: 'pointer' }}>Terms & Conditions</a></li>
                <li><a href="/about"  style={{ cursor: 'pointer' }}>Privacy Policy    </a></li>
                <li><a href="/about"  style={{ cursor: 'pointer' }}>Blog              </a></li>
                <li><a href="/about"  style={{ cursor: 'pointer' }}>Disclosure        </a></li>
            </ul>
        </div>

        <div className="download-app">
          <p className='download'> Download the app </p>
          <a className="android" href=""> <img src={'./images/android.png'}  /></a>
          <a className="ios"     href=""> <img src={'./images/ios.png'}      /></a>
        </div>

      </div>
    </footer>
  )
}

export default footer